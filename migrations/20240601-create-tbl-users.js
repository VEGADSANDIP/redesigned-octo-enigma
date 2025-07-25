module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('tbl_users', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true,
            },
            password: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            photo: {
                type: Sequelize.STRING(500),
                allowNull: false,
                defaultValue: '',
            },
            phone: {
                type: Sequelize.STRING(20),
                allowNull: true,
                unique: true,
            },
            type: {
                type: Sequelize.ENUM('guest', 'email', 'social'),
                allowNull: false,
                defaultValue: 'email',
            },
            kyc_verify: {
                type: Sequelize.TINYINT,
                allowNull: false,
                defaultValue: 0,
                comment: '0 = customer/login user, 1 = KYC submitted, 2 = KYC verified, 3 = KYC rejected',
            },
            social_type: {
                type: Sequelize.ENUM(
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
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            device_type: {
                type: Sequelize.ENUM('android', 'ios', 'web'),
                allowNull: true,
            },
            device_name: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            device_token: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            otp_code: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            otp_expiry: {
                type: Sequelize.BIGINT,
                allowNull: true,
            },
            role: {
                type: Sequelize.TINYINT,
                allowNull: false,
                defaultValue: 0,
                comment: '0 = Retail Vendor, 1 = Wholesale Vendor, 2 = Dropshipping Vendor, 3 = Manufacturer Vendor, 4 = Digital Vendor, 5 = Subscription Vendor',
            },
            active_flag: {
                type: Sequelize.TINYINT,
                allowNull: false,
                defaultValue: 1,
                comment: '0 = inactive, 1 = active, 2 = banned, 3 = deleted',
            },
            created_by: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            updated_by: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        });
        await queryInterface.addIndex('tbl_users', ['email'], { name: 'idx_email' });
        await queryInterface.addIndex('tbl_users', ['password'], { name: 'idx_password' });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable('tbl_users');
    },
}; 