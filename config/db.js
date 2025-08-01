const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

console.log('db.js is being executed');
pool.promise().getConnection()
    .then((connection) => {
        console.log('✅ Connected to MySQL');
        connection.release();
    })
    .catch((err) => {
        console.error('❌ Error connecting to database:', err);
        process.exit(1);
    });

module.exports = pool.promise();