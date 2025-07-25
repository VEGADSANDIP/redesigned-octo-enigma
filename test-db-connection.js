const mysql = require('mysql2/promise');
require('dotenv').config();

async function testDatabaseConnection() {
    console.log('🔍 Testing database connection...');
    console.log('Configuration:', {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        database: process.env.DB_NAME
    });

    try {
        // Test connection without database first
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        });

        console.log('✅ Connected to MySQL server successfully!');

        // Check if database exists
        const [rows] = await connection.execute('SHOW DATABASES');
        const databases = rows.map(row => row.Database);
        
        console.log('📋 Available databases:', databases);

        const targetDb = process.env.DB_NAME || 'game_db';
        if (databases.includes(targetDb)) {
            console.log(`✅ Database '${targetDb}' exists`);
            
            // Try to connect to the specific database
            await connection.execute(`USE ${targetDb}`);
            console.log(`✅ Successfully connected to database '${targetDb}'`);
        } else {
            console.log(`❌ Database '${targetDb}' does not exist`);
            console.log('💡 You can create it with: CREATE DATABASE game_db;');
        }

        await connection.end();
        console.log('🎉 Database connection test completed successfully!');
        
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        console.error('');
        console.error('🔧 Troubleshooting steps:');
        console.error('1. Make sure MySQL is running');
        console.error('2. Check if the port is correct (MySQL default: 3306)');
        console.error('3. Verify username and password');
        console.error('4. Check if the database exists');
        console.error('');
        console.error('💡 To start MySQL on Windows:');
        console.error('   - Open Services (services.msc)');
        console.error('   - Find "MySQL" service and start it');
        console.error('   - Or use: net start mysql');
    }
}

testDatabaseConnection(); 