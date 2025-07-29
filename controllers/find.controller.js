const { pariMeterTriangle, simpleInterest, countNtoOne, cheackPrimeNumber, triangleValidNot, factorialNumber, evenOneToN, maximumThreeNumber } = require('../services/find.service');
const { handleErrorResponse } = require('../utils/errorHandler');

exports.pariMeterTriangle = async (req, res) => {
    try {
        const { a, b, c } = req.body;
        const result = await pariMeterTriangle({ a, b, c });
        res.status(200).json({
            message: `The perimeter of triangle with sides a = ${a}, b = ${b}, c = ${c} is:`,
            result: result
        });
    } catch (err) {
        res.status(err.status || 500).json({
            message: err.message || 'Server error',
            error: err.error || err
        });
    };
};

exports.simpleInterest = async (req, res) => {
    try {
        // Principal (P): The original amount.
        // Rate (R): The annual interest rate as a percentage.
        // Time (T): The duration in years.
        const { principal, rate, time } = req.body;
        const result = await simpleInterest({ principal, rate, time });
        res.status(200).json({
            message: `The simple interest has been calculated successfully Principal = ${principal}, Rate = ${rate}, Time = ${time} :`,
            result: result
        });

    } catch (err) {
        res.status(err.status || 500).json({
            message: err.message || 'Server error',
            error: err.error || err
        });
    };
};

exports.countNtoOne = async (req, res) => {
    try {
        const { number } = req.body;
        const result = await countNtoOne({ number });
        res.status(200).json({
            message: `Successfully generated numbers from N to 1.`,
            result: result
        });
    } catch (err) {
        res.status(err.status || 500).json({
            message: err.message || 'Server error',
            error: err.error || err
        });
    };
}

exports.cheackPrimeNumber = async (req, res) => {
    try {
        // Divisibility: A prime number is only divisible by 1 and itself. 
        // Greater than 1: Prime numbers are always greater than 1. 
        // Uniqueness: The number 1 is neither prime nor composite. 
        const { number } = req.body;
        const result = await cheackPrimeNumber({ number });
        res.status(200).json({
            message: `Checked whether ${number} is a prime number.`,
            result: result
        });
    } catch (err) {
        res.status(err.status || 500).json({
            message: err.message || 'Server error',
            error: err.error || err
        });
    };
};


exports.triangleValidNot = async (req, res) => {
    try {
        const { a, b, c } = req.body;
        const result = await triangleValidNot({ a, b, c });
        res.status(200).json({
            message: `Triangle validation successful.`,
            result: result
        });
    } catch (err) {
        res.status(err.status || 500).json({
            message: err.message || 'Server error',
            error: err.error || err
        });
    };
};


exports.factorialNumber = async (req, res) => {
    try {
        const { number } = req.body;
        const result = await factorialNumber({ number });
        res.status(200).json({
            message: `Factorial of ${number} has been calculated successfully.`,
            result: result
        });
    } catch (err) {
        res.status(err.status || 500).json({
            message: err.message || 'Server error',
            error: err.error || err
        });
    };
}

exports.evenOneToN = async (req, res) => {
    try {
        const { number } = req.body;
        const result = await evenOneToN({ number })
        res.status(200).json({
            message: `Even number of 1 To ${number}.`,
            result: result
        });
    } catch (err) {
        res.status(err.status || 500).json({
            message: err.message || 'Server error',
            error: err.error || err
        });
    };
};

exports.maximumThreeNumber = async (req, res) => {
    try {
        const { a, b, c } = req.body;
        const result = await maximumThreeNumber({ a, b, c });

        res.status(200).json({
            message: `Maximum of ${a}, ${b}, and ${c}`,
            result: result
        });

    } catch (err) {
        handleErrorResponse(res, err, 'Failed to calculate maximum')
    };
};

