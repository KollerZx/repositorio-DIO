import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes'
import UserController from './Adapters/UserController'
const router = Router()

const users = [
    {
        uuid:'abc4e5f-aef56fab2',
        userName: 'Henrique',
        password:'abcf544e54bbcfe4890cbfee2'
        
    }
]
router.get('/status',  ( req: Request, res: Response, next: NextFunction ) => {
    res.sendStatus(StatusCodes.OK)
})

router.get('/users', async ( req: Request, res: Response, next: NextFunction ) => await UserController.findAll(req, res))

router.get('/users/:uuid', async ( req: Request<{ uuid: string }>, res: Response, next: NextFunction ) => await UserController.findById(req, res))

router.post('/users', async ( req: Request<{uuid: string}>, res: Response, next: NextFunction ) => await UserController.createUser(req,res))

router.put('/users/:uuid', async ( req: Request, res: Response, next: NextFunction ) =>  await UserController.updateUser(req,res))

router.delete('/users/:uuid', ( req: Request<{ uuid: string }>, res: Response, next: NextFunction ) => {
    const uuid = req.params.uuid

    let userDeleted = users.findIndex(user => user.uuid === uuid)
    users.splice(userDeleted, 1)

    res.status(StatusCodes.OK).json(users)
    
})

export { router }