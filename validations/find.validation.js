const { handleErrorResponse } = require("../utils/errorHandler");

exports.validateMaximumThreeNumber = async (req, res, next) => {
    try {
        const { a, b, c } = req.body;
        const error = {};
        if (isNaN(Number(a))) error.a = `a is not Number`;
        if (isNaN(Number(b))) error.b = `b is not Number`;
        if (isNaN(Number(c))) error.c = `c is not Number`;

        if (Object.keys(error).length > 0) {
            return res.status(400).json({
                message: `All values must be Number.`,
                error: error
            })
        }

        next();
    } catch (err) {
        handleErrorResponse(req, err, 'Validation failed')
    };
};

