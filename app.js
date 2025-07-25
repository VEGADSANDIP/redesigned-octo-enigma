require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/index');

const app = express();


app.use(
    session({
        secret: "my_secret",
        resave: false,
        saveUninitialized: false,
    })
);

//   const allowedOrigins = [process.env.Frontend_URL];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Dynamically register routes
routes.forEach(({ path, route }) => {
    app.use(path, route);
});

// Health check or root endpoint
app.get('/', (req, res) => {
    res.json({ message: 'API is running.' });
});

module.exports = app;