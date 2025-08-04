module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('tbl_admin', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true,
            },
            password: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            role: {
                type: Sequelize.TINYINT,
                allowNull: false,
                defaultValue: 1,
                comment: '1 = Support, 2 = Manager, 3 = Super Admin etc.',
            },
            mobile: {
                type: Sequelize.STRING(15),
                allowNull: true,
                comment: 'Optional contact',
            },
            profile_image: {
                type: Sequelize.STRING(255),
                allowNull: true,
                comment: 'Avatar/profile photo path',
            },
            active_flag: {
                type: Sequelize.TINYINT,
                allowNull: false,
                defaultValue: 1,
                comment: '0 = inactive, 1 = active, 2 = banned, 3 = deleted',
            },
            last_login_at: {
                type: Sequelize.DATE,
                allowNull: true,
                comment: 'Track last login time',
            },
            login_ip: {
                type: Sequelize.STRING(45),
                allowNull: true,
                comment: 'Track IP of last login',
            },
            login_attempts: {
                type: Sequelize.TINYINT,
                allowNull: false,
                defaultValue: 0,
                comment: 'Count of failed attempts',
            },
            is_email_verified: {
                type: Sequelize.TINYINT,
                allowNull: false,
                defaultValue: 0,
                comment: 'Email verification flag',
            },
            session_token: {
                type: Sequelize.STRING(255),
                allowNull: true,
                comment: 'Optional: for token-based admin sessions',
            },
            notes: {
                type: Sequelize.TEXT,
                allowNull: true,
                comment: 'Admin notes/internal info',
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
        await queryInterface.addIndex('tbl_admin', ['email'], { name: 'idx_email' });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable('tbl_admin');
    },
}; 