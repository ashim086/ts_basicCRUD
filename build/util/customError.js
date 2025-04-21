class errorCustom extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, errorCustom);
    }
}
export default errorCustom;
