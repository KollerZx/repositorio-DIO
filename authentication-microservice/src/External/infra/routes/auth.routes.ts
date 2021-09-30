import { NextFunction, Request, Response, Router } from "express";
import basicAuthenticationMiddleware from "../../../Adapters/middlewares/basicAuthentication.middleware";
import { StatusCodes } from 'http-status-codes';
import jwtAuthenticationMiddleware from "../../../Adapters/middlewares/jwtAuthentication.middleware";
import generateJWT from "../../../Adapters/middlewares/generateJWT";

const authRoute = Router()

authRoute.post('/token', basicAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwt = generateJWT(req, res, next)
        
        res.status(StatusCodes.OK).json({ token: jwt })
    } catch (error) {
        next(error)    
    }
})

authRoute.post('/token/validate', jwtAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK)
})
//TODO: Implementar refresh token
authRoute.post('/token/refresh', (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.NOT_IMPLEMENTED)
})


export default authRoute