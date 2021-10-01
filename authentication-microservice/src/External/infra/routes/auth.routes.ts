import { NextFunction, Request, Response, Router } from "express";
import basicAuthenticationMiddleware from "../../../Adapters/middlewares/basicAuthentication.middleware";
import { StatusCodes } from 'http-status-codes';
import jwtAuthenticationMiddleware from "../../../Adapters/middlewares/jwtAuthentication.middleware";
import TokenUserController from "../../../Adapters/Controllers/TokenUserController";
import RefreshTokenUserController from "../../../Adapters/Controllers/RefreshTokenUserController";

const authRoute = Router()

authRoute.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => await TokenUserController.execute(req, res, next))

authRoute.post('/token/validate', jwtAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK)
})

authRoute.post('/token/refresh', (req: Request, res: Response, next: NextFunction) => RefreshTokenUserController.handle(req, res, next))


export default authRoute