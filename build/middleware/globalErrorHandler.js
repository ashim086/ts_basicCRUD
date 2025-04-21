export const globalHandlerError = (error, req, res, next) => {
    let statusCode = error.statusCode ?? 500;
    let message = error.message || "Internal server error";
    res.status(statusCode).json({
        message: message,
        success: false
    });
};
