require('dotenv').config();
const app = require("./app");
const PORT = process.env.PORT;
const initDatabase = require('./config/dbInit');

(async () => {
    await initDatabase(); // Connect DB + run migrations

    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
        console.log(`API available at: http://localhost:${PORT}/`);
    });
})();
