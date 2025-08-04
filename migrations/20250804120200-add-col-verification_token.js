module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('tbl_admin', 'verification_token', {
            type: Sequelize.STRING(255),
            allowNull: true,
            comment: 'Token for email verification',
        });
    },
    down: async (queryInterface) => {
        await queryInterface.removeColumn('tbl_admin', 'verification_token');
    },
}; 