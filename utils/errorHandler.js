exports.handleErrorResponse = async (res, err, defaultMessage = 'Server error') => {
    res.status(err.status || 500).json({
        message: err.message || defaultMessage,
        error: err.error || err
    });
}