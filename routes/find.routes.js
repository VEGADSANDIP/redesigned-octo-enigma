const express = require('express');
const router = express.Router();
const { validateMaximumThreeNumber } = require('../validations/find.validation');
const Find = require('../controllers/find.controller');

router.post('/pari-meter-triangle', Find.pariMeterTriangle);
router.post('/simple-interest', Find.simpleInterest);
router.post('/count-number-to-one', Find.countNtoOne);
router.post('/cheack-prime-number', Find.cheackPrimeNumber);
router.post('/triangle-valid-not', Find.triangleValidNot);
router.post('/factorial-number', Find.factorialNumber);
router.post('/even-one-to-n', Find.evenOneToN);
router.post(
    '/maximum-three-number',
    validateMaximumThreeNumber, // validation middleware
    Find.maximumThreeNumber      // controller
);

module.exports = router;