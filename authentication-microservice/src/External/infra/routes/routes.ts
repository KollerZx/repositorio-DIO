import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes'
import { userController } from '../../Factorys/index'

const router = Router()

router.get('/status',  ( req: Request, res: Response, next: NextFunction ) => {
    res.sendStatus(StatusCodes.OK).send()
})

router.get('/users', async ( req: Request, res: Response, next: NextFunction ) => await userController.findAll(req, res, next))

router.get('/users/:uuid', async ( req: Request<{ uuid: string }>, res: Response, next: NextFunction ) => await userController.findById(req, res, next))

router.post('/users', async ( req: Request<{uuid: string}>, res: Response, next: NextFunction ) => await userController.createUser(req, res, next))

router.put('/users/:uuid', async ( req: Request, res: Response, next: NextFunction ) =>  await userController.updateUser(req, res, next))

router.delete('/users/:uuid', async ( req: Request<{ uuid: string }>, res: Response, next: NextFunction ) => await userController.removeUser(req, res, next))

export { router }