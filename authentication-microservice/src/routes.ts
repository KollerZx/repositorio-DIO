import { Router, Request, Response, NextFunction } from "express";

const router = Router()

router.get('/status', ( req: Request, res: Response, next: NextFunction ) => {
    res.status(200).send({ foo: 'bar'})
})

export { router }