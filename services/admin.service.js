const bcryptjs = require('bcryptjs');
const { Admin } = require('../models');
const { sendMail } = require('../utils/mailer');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');

async function registerAdmin({ name, email, password, role, mobile, profile_image, baseUrl }) {
    const hashPassword = await bcryptjs.hash(password, 10);
    const verification_token = uuidv4();
    const admin = await Admin.create({
        name,
        email,
        password: hashPassword,
        role: role || 1,
        mobile,
        profile_image,
        active_flag: 1,
        is_email_verified: 0,
        verification_token
    });

    // Send verification email
    const verifyUrl = `${baseUrl}/admin/verify-email?token=${verification_token}&email=${encodeURIComponent(email)}`;
    await sendMail({
        to: email,
        subject: 'Verify your email',
        html: `
            <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 32px; border-radius: 8px; max-width: 480px; margin: 0 auto; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <h2 style="color: #2d7ff9; text-align: center; margin-bottom: 16px;">Welcome${name ? ' ' + name : ''}!</h2>
                <p style="font-size: 16px; color: #333; text-align: center;">Thank you for registering as an admin. To complete your registration, please verify your email address by clicking the button below:</p>
                <div style="text-align: center; margin: 32px 0;">
                    <a href="${verifyUrl}" style="background: #2d7ff9; color: #fff; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-size: 18px; font-weight: bold; display: inline-block;">Verify Email</a>
                </div>
                <p style="font-size: 14px; color: #888; text-align: center;">If you did not create this account, you can safely ignore this email.</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
                <p style="font-size: 12px; color: #bbb; text-align: center;">&copy; ${new Date().getFullYear()} Bill App. All rights reserved.</p>
            </div>
        `
    });
    return admin;
}

// Register Admin
async function verifyEmail(token, email) {
    const admin = await Admin.findOne({ where: { email, verification_token: token } });
    if (!admin) return false;
    admin.is_email_verified = 1;
    admin.verification_token = null;
    await admin.save();
    return true;
}

async function loginAdmin({ email, password, ip }) {
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
        return { success: false, message: 'Invalid email or password.' };
    }
    if (admin.login_attempts >= 5) {
        return { success: false, message: 'Maximum login attempts reached. Please reset your password.' };
    }
    if (admin.is_email_verified !== 1) {
        return { success: false, message: 'Email not verified.' };
    }
    if (admin.active_flag !== 1) {
        return { success: false, message: 'Account is not active.' };
    }
    const isMatch = await bcryptjs.compare(password, admin.password);
    if (!isMatch) {
        admin.login_attempts = (admin.login_attempts || 0) + 1;
        await admin.save();
        if (admin.login_attempts >= 5) {
            return { success: false, message: 'Maximum login attempts reached. Your account is now locked. Please reset your password.' };
        }
        return { success: false, message: 'Invalid email or password.' };
    }

    const isFirstLogin = !admin.last_login_at;

    // Generate JWT
    const token = jwt.sign(
        { id: admin.id, role: admin.role },
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
    );

    // Successful login: update fields
    admin.last_login_at = new Date();
    admin.login_ip = ip;
    admin.login_attempts = 0;
    admin.session_token = token;
    await admin.save();

    // Send welcome email only on first login
    if (isFirstLogin) {
        await sendMail({
            to: admin.email,
            subject: 'Welcome to the application',
            html: `<div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 32px; border-radius: 8px; max-width: 480px; margin: 0 auto; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <h2 style="color: #2d7ff9; text-align: center; margin-bottom: 16px;">Welcome, ${admin.name || 'Admin'}!</h2>
                <p style="font-size: 16px; color: #333; text-align: center;">Welcome to the application. You have been selected for the supporting admin role (Role: ${admin.role}).</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
                <p style="font-size: 12px; color: #bbb; text-align: center;">&copy; ${new Date().getFullYear()} Bill App. All rights reserved.</p>
            </div>`
        });
    }

    return { success: true, token, role: admin.role };
}

module.exports = { registerAdmin, verifyEmail, loginAdmin }; 