const { Sequelize } = require("sequelize");
require('dotenv').config();

console.log('✅ Sequelize instance initialized');
console.log('Database config:', {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_NAME || 'game_db',
    user: process.env.DB_USER || 'root'
});

const sequelize = new Sequelize(
    process.env.DB_NAME || 'game_db',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || 'ext@2707',
    {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        dialect: "mysql",
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        retry: {
            max: 3
        }
    }
);

// Test the connection
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connection has been established successfully.');
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error.message);
        console.error('Please check your database configuration in .env file');
        console.error('Required environment variables:');
        console.error('- DB_HOST (default: localhost)');
        console.error('- DB_USER (default: root)');
        console.error('- DB_PASSWORD (default: ext@2707)');
        console.error('- DB_NAME (default: game_db)');
        console.error('- DB_PORT (default: 3306) - MySQL port, not server port!');
        console.error('');
        console.error('Common issues:');
        console.error('1. MySQL is not running');
        console.error('2. Wrong port (MySQL uses 3306, not 5000)');
        console.error('3. Wrong database name');
        console.error('4. Wrong password');
    }
};

testConnection();

module.exports = sequelize;
