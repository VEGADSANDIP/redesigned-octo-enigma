const express = require('express');
const router = express.Router();
const Validators = require('../validators/pattern.validation');
const Pattern = require('../controllers/pattern.controller');

router.post('/solid-square', Validators.valdateNumber, Pattern.solidSquare);
router.post('/hollow-square', Validators.valdateNumber, Pattern.hollowSquare);

module.exports = router;