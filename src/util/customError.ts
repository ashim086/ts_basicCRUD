class errorCustom extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {


        super(message);

        this.statusCode = statusCode;

        Error.captureStackTrace(this, errorCustom)

    }

}

export default errorCustom;
