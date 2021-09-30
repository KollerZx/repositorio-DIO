import { NextFunction, Request, Response, Router } from "express";
import basicAuthenticationMiddleware from "../../../Adapters/middlewares/basicAuthentication.middleware";
import JWT from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes';
import ForbiddenError from "../../../Adapters/Errors/ForbiddenError";

const authRoute = Router()

authRoute.post('/token', basicAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user
        if(!user){
            throw new ForbiddenError('Usuário não informado!')
        }
        const jwtPayload = { username: user.username }
        const jwtOptions = { subject: user?.uuid }
        const secretKey: string = process.env.JWT_SECRET
        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions )

        res.status(StatusCodes.OK).json({ token: jwt })
    } catch (error) {
        next(error)    
    }
})


export default authRoute