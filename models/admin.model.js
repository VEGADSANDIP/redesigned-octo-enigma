const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Admin =  sequelize.define('Admin',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    role: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
        comment: '1 = Support, 2 = Manager, 3 = Super Admin etc.',
    },
    mobile: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: 'Optional contact',
    },
    profile_image: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: 'Avatar/profile photo path',
    },
    active_flag: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
        comment: '0 = inactive, 1 = active, 2 = banned, 3 = deleted',
    },
    last_login_at: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'Track last login time',
    },
    login_ip: {
        type: DataTypes.STRING(45),
        allowNull: true,
        comment: 'Track IP of last login',
    },
    login_attempts: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: 'Count of failed attempts',
    },
    is_email_verified: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: 'Email verification flag',
    },
    session_token: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: 'Optional: for token-based admin sessions',
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: 'Admin notes/internal info',
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
    verification_token: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: 'Token for email verification',
    },
}, {
    tableName: 'tbl_admin',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
        { unique: true, fields: ['email'] },
        { fields: ['email'], name: 'idx_email' },
    ],
});

module.exports = { Admin }