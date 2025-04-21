import { NextFunction, Request, Response } from "express";

export const globalHandlerError = (error: any, req: Request, res: Response, next: NextFunction): void => {

    let statusCode = error.statusCode ?? 500;
    let message = error.message || "Internal server error";


    res.status(statusCode).json({
        message: message,
        success: false
    })
}