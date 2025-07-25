const express = require('express');
const router = express.Router();
const User = require('../controllers/admin.controller');
const { registerValidation, loginValidation } = require('../validations/admin.validation');
const { authenticateAdmin } = require('../middlewares/auth.middleware');
const upload = require('../middlewares/multer');

// Attach validation as middleware before the controller
router.post('/register', registerValidation, User.register);
router.get('/verify-email', User.verifyEmail);
router.post('/login', loginValidation, User.login);
router.get('/profile', authenticateAdmin, User.getProfile);
router.patch('/profile', authenticateAdmin, upload.single('profile_image'), User.updateProfile);

module.exports = router;