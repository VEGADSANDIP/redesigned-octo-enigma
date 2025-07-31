const { numberHandleErrorResponse, catchHandleErrorResponse, } = require("../utils/errorHandler")

exports.valdateNumber = async (req, res, next) => {
    try {
        const { number } = req.body;
        const error = {};

        if (isNaN(Number(number))) error.number = `${number}' must be a valid numeric value`;

        if (Object.keys(error).length > 0) {
            return numberHandleErrorResponse(res, error);
        };

        next();
    } catch (err) {
        catchHandleErrorResponse(res, err, 'Failed to validation in Number')
    }
}