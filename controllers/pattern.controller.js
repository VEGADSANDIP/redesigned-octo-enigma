const { solidSquare, hollowSquare } = require("../services/pattern.service");
const { resultHandleErrorResponse, catchHandleErrorResponse } = require("../utils/errorHandler");

exports.solidSquare = async (req, res) => {
    try {
        const { number } = req.body;
        const result = await solidSquare({ number });
        resultHandleErrorResponse(res, message = `Solid square pattern (${number} × ${number}) generated successfully.`, result);
    } catch (err) {
        catchHandleErrorResponse(res, err, `Error while generating solid square pattern.`);
    };
};


exports.hollowSquare = async (req, res) => {
    try{
        const { number } = req.body;
        const result = await hollowSquare({ number });
        resultHandleErrorResponse(res, message = `Hollow square pattern (${number} × ${number}) generated successfully.`, result);
    } catch(err) {
        catchHandleErrorResponse(res, err, `Error while generating hollow square pattern.`)
    }
}