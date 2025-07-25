const { body } = require('express-validator');

exports.registerValidation = [
    body('name').optional().isString().isLength({ max: 100 }),
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Valid email is required')
        .isLength({ max: 100 }),
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('role').optional().isInt({ min: 1 }),
    body('mobile').optional().isString().isLength({ max: 15 }),
    body('profile_image').optional().isString().isLength({ max: 255 })
];

exports.loginValidation = [
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Valid email is required'),
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
];
