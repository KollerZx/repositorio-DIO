import { NextFunction, Request, Response, Router } from "express";
import basicAuthenticationMiddleware from "../../../Adapters/middlewares/basicAuthentication.middleware";
import JWT from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes';

const authRoute = Router()

authRoute.post('/token', basicAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    const user = req.user
    const jwtPayload = { username: user.username }
    const jwtOptions = { subject: user?.uuid }
    const secretKey: string = process.env.JWT_SECRET
    const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions )

    res.status(StatusCodes.OK).json({ token: jwt })
})


export default authRoute