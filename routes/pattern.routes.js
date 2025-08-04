const express = require('express');
const router = express.Router();
const Validators = require('../validators/pattern.validators');
const Pattern = require('../controllers/pattern.controller');

router.post('/solid-square', Validators.valdateNumber, Pattern.solidSquare);
router.post('/hollow-square', Validators.valdateNumber, Pattern.hollowSquare);
router.post('/hollow-inverted-half-pyramid', Validators.valdateNumber, Pattern.hollowInvertedHalfPyramid);
router.post('/solid-pyramid', Validators.valdateNumber, Pattern.solidPyramid);
router.post('/hollow-pyramid', Validators.valdateNumber, Pattern.hollowPyramid);

module.exports = router;