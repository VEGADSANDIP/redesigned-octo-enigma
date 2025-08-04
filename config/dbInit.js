// dbInit.js
require('dotenv').config();
const { sequelize } = require('../models')
const { exec } = require('child_process');

async function initDatabase() {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected successfully.');

        await runMigrations();

    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        process.exit(1);
    }
}

function runMigrations() {
    return new Promise((resolve, reject) => {
        console.log('⚙️ Checking pending migrations...');

        // First check migration status
        exec('npx sequelize-cli db:migrate:status', (statusErr, statusStdout) => {
            if (statusErr) {
                console.error('❌ Failed to check migration status:', statusErr.message);
                return reject(statusErr);
            }

            // Parse output to detect pending migrations
            const pendingMigrations = statusStdout
                .split('\n')
                .filter(line => line.includes('down'))
                .map(line => line.trim());

            if (pendingMigrations.length === 0) {
                console.log('✅ No pending migrations. Database is up-to-date.');
                return resolve();
            }

            console.log('📋 Pending migrations:', pendingMigrations);

            // Run only if there are pending migrations
            exec('npx sequelize-cli db:migrate', (migrateErr, migrateStdout, migrateStderr) => {
                if (migrateErr) {
                    console.error('❌ Migration failed:', migrateStderr);
                    return reject(migrateErr);
                }
                console.log(migrateStdout);
                console.log('✅ Migrations applied successfully.');
                resolve();
            });
        });
    });
}

module.exports = initDatabase;
