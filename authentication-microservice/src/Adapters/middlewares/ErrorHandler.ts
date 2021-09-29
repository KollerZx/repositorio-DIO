import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import DatabaseError from "../../repositories/Errors/DatabaseError";
import ForbiddenError from "../Errors/ForbiddenError";


export default function errorHandler(error: any, req: Request, res: Response, next: NextFunction){
    if(error instanceof DatabaseError){
        res.sendStatus(StatusCodes.BAD_REQUEST)
    }
    else if(error instanceof ForbiddenError){
        res.sendStatus(StatusCodes.FORBIDDEN)
    }
    else{
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}