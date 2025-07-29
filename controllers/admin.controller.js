const { validationResult } = require('express-validator');
const { registerAdmin, verifyEmail, loginAdmin } = require('../services/admin.service');
const fs = require('fs');
const path = require('path');

exports.register = async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }

    try {
        // Only allow required fields
        const { name, email, password, role, mobile, profile_image } = req.body;
        const baseUrl = process.env.BASE_URL;
        await registerAdmin({ name, email, password, role, mobile, profile_image, baseUrl });
        return res.status(200).json({ message: 'Register successful. Please check your email to verify your account.' });
    } catch (err) {
        res.status(err.status || 500).json({
            message: err.message || 'Server error',
            error: err.error || err
        });
    };
};

exports.verifyEmail = async (req, res) => {
    const { token, email } = req.query;
    if (!token || !email) {
        return res.status(400).json({ message: 'Invalid verification link.' });
    }
    const success = await verifyEmail(token, email);
    if (success) {
        return res.status(200).json({ message: 'Email verified successfully. You can now log in.' });
    } else {
        return res.status(400).json({ message: 'Invalid or expired verification link.' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.ip;
    try {
        const result = await loginAdmin({ email, password, ip });
        if (!result.success) {
            return res.status(401).json({ message: result.message });
        }
        return res.status(200).json({ message: 'Login successfully', session_token: result.token });
    } catch (err) {
        res.status(err.status || 500).json({
            message: err.message || 'Server error',
            error: err.error || err
        });
    };
};

exports.getProfile = (req, res) => {
    try {
        const { name, email, mobile, profile_image } = req.admin;
        return res.status(200).json({ name, email, mobile, profile_image });
    } catch (err) {
        res.status(err.status || 500).json({
            message: err.message || 'Server error',
            error: err.error || err
        });
    };

};

exports.updateProfile = async (req, res) => {
    try {
        const { name, mobile } = req.body;
        let profile_image = req.admin.profile_image;

        // Handle image upload
        if (req.file) {
            const uploadDir = path.join(__dirname, '../public/UserProfileImg');
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }
            // Move file to UserProfileImg if not already there
            const ext = path.extname(req.file.originalname);
            const filename = Date.now() + '-' + Math.round(Math.random() * 1e9) + ext;
            const destPath = path.join(uploadDir, filename);
            fs.renameSync(req.file.path, destPath);
            profile_image = `/public/UserProfileImg/${filename}`;
        }

        // Update admin fields
        req.admin.name = name ?? req.admin.name;
        req.admin.mobile = mobile ?? req.admin.mobile;
        req.admin.profile_image = profile_image;
        await req.admin.save();

        return res.status(200).json({ message: 'Profile updated successfully' });
    } catch (err) {
        res.status(err.status || 500).json({
            message: err.message || 'Server error',
            error: err.error || err
        });
    };
};
