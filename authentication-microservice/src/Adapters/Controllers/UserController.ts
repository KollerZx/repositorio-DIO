import { NextFunction, Request, Response } from 'express';
import {StatusCodes} from 'http-status-codes'
import { UsersUseCase } from '../../UseCases/Users/UsersUseCase';

class UserController{
    private usersUseCase: UsersUseCase

    constructor(usersUseCase: UsersUseCase){
        this.usersUseCase = usersUseCase
    }
    async findAll(req: Request, res: Response, next: NextFunction){
        const users = await this.usersUseCase.findAllUsers()

        res.status(StatusCodes.OK).json(users)
    }
    async findById(req: Request, res: Response, next: NextFunction){
        const { uuid } = req.params
        try {
            const user = await this.usersUseCase.findUserById(uuid)
            res.status(StatusCodes.OK).json(user)
        } catch (error) {
            next(error)
        }
    }
    async createUser(req: Request, res: Response, next: NextFunction){
        const { username, password } = req.body

        try {
            const user_id = await  this.usersUseCase.createUser(username, password)
            res.status(StatusCodes.CREATED).json(user_id)
        } catch (error) {
            next(error)
        }
    }

    async updateUser(req: Request, res: Response, next: NextFunction){
        const { username, password } = req.body
        const { uuid } = req.params
        try {
            await this.usersUseCase.updateUser(uuid, username, password)
            res.status(StatusCodes.OK).send()
        } catch (error) {
            next(error)
        }
    }
    async removeUser(req: Request, res: Response, next: NextFunction){
        const { uuid } = req.params
        try {
            await this.usersUseCase.removeUser(uuid)
            res.status(StatusCodes.OK).send()
        } catch (error) {
            next(error)
        }
    }
    async findByUsernameAndPassword(req: Request, res: Response, next: NextFunction){
        
    }

}

export { UserController }