const { solidSquare, hollowSquare, hollowInvertedHalfPyramid, solidPyramid, hollowPyramid } = require("../services/pattern.service");
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

exports.hollowInvertedHalfPyramid = async (req, res) => {
    try{
        const { number } = req.body;
        const result = await hollowInvertedHalfPyramid({ number });
        resultHandleErrorResponse(res, message= `Hollow Inverted Half Pyramid pattern (${number} × ${number}) generated successfully.`, result)
    } catch(err) {
        catchHandleErrorResponse(res, err, `Error while generating hollow Inverted Half Pyramid pattern.`)
    };
};


exports.solidPyramid = async (req, res) => {
    try{
        const { number } = req.body;
        const result = await solidPyramid({ number });
        resultHandleErrorResponse(res, message= `Solid Pyramid pattern (${number} × ${number}) generated successfully.`, result)
    } catch(err) {
        catchHandleErrorResponse(res, err, `Error while generating Solid Pyramid pattern.`)
    };
};

exports.hollowPyramid = async (req, res) => {
    try{
        const { number } = req.body;
        const result = await hollowPyramid({ number });
        resultHandleErrorResponse(res, message= `Solid Pyramid pattern (${number} × ${number}) generated successfully.`, result)
    } catch(err) {
        catchHandleErrorResponse(res, err, `Error while generating Solid Pyramid pattern.`)
    }
}