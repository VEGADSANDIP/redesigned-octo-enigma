const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    photo: {
        type: DataTypes.STRING(500),
        allowNull: false,
        defaultValue: '',
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
        unique: true,
    },
    type: {
        type: DataTypes.ENUM('guest', 'email', 'social'),
        allowNull: false,
        defaultValue: 'email',
    },
    kyc_verify: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
        // 0 = customer/login user, 1 = KYC submitted, 2 = KYC verified, 3 = KYC rejected
        comment: '0 = customer/login user, 1 = KYC submitted, 2 = KYC verified, 3 = KYC rejected',
    },
    social_type: {
        type: DataTypes.ENUM(
            'google',
            'facebook',
            'apple',
            'microsoft',
            'twitter',
            'linkedin',
            'github',
            'amazon',
            'yahoo'
        ),
        allowNull: true,
    },
    social_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    device_type: {
        type: DataTypes.ENUM('android', 'ios', 'web'),
        allowNull: true,
    },
    device_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    device_token: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    otp_code: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    otp_expiry: {
        type: DataTypes.BIGINT,
        allowNull: true,
    },
    role: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
        /*
            0 = Retail Vendor (Sells finished products directly to customers.)
            1 = Wholesale Vendor (Sells products in bulk to other businesses.)
            2 = Dropshipping Vendor (Fulfills orders directly to customers on behalf of another store.)
            3 = Manufacturer Vendor (Produces goods and sells directly or via intermediaries.)
            4 = Digital Vendor (Sells digital products like eBooks, software, or media.)
            5 = Subscription Vendor (Offers recurring product/service subscriptions, e.g., meal kits, magazines.)
        */
        comment: '0 = Retail Vendor, 1 = Wholesale Vendor, 2 = Dropshipping Vendor, 3 = Manufacturer Vendor, 4 = Digital Vendor, 5 = Subscription Vendor',
    },
    active_flag: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
        comment: '0 = inactive, 1 = active, 2 = banned, 3 = deleted',
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'tbl_users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
        { unique: true, fields: ['email'] },
        { unique: true, fields: ['phone'] },
        { fields: ['email'], name: 'idx_email' },
        { fields: ['password'], name: 'idx_password' },
    ],
});


module.exports = { User }
