import { NextFunction, Request, Response, Router } from "express";
import authBasic from "../../../Adapters/middlewares/authBasic";

const authRoute = Router()

authRoute.post('/token', (req: Request, res: Response, next: NextFunction) => authBasic(req, res, next))


export default authRoute