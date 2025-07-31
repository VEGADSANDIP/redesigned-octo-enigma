// Value Must Be Number
exports.numberHandleErrorResponse = async (res, error) => {
    res.status(400).json({
        message: `All values must be Number.`,
        error: error
    });
};

// Result Error Response
exports.resultHandleErrorResponse = async (res, message, result) => {
    res.status(200).json({
        message: message,
        result: result
    });
};

//  Catch Error
exports.catchHandleErrorResponse = async (res, err, defaultMessage = 'Server error') => {
    res.status(err.status || 500).json({
        message: err.message || defaultMessage,
        error: err.error || err
    });
};


