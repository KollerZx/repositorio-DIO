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

router.get('/users', async ( req: Request, res: Response, next: NextFunction ) => UserController.findAll(req, res))

router.get('/users/:uuid', ( req: Request<{ uuid: string }>, res: Response, next: NextFunction ) => UserController.findById(req, res))


router.post('/users', ( req: Request<{uuid: string}>, res: Response, next: NextFunction ) => UserController.createUser(req,res))

router.put('/users/:uuid', ( req: Request<{uuid: string}>, res: Response, next: NextFunction ) => {
    const {userName, password} = req.body
    const uuid = req.params.uuid

    let userUpdate = users.findIndex((user) => user.uuid === uuid)
    
    users[userUpdate].userName = userName
    users[userUpdate].password = password
    
    
    res.status(StatusCodes.OK).json(users[userUpdate])
    

})
router.delete('/users/:uuid', ( req: Request<{ uuid: string }>, res: Response, next: NextFunction ) => {
    const uuid = req.params.uuid

    let userDeleted = users.findIndex(user => user.uuid === uuid)
    users.splice(userDeleted, 1)

    res.status(StatusCodes.OK).json(users)
    
})

export { router }