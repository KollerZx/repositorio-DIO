import { Request, Response } from 'express';
import {StatusCodes} from 'http-status-codes'
import UserRepository from '../repositories/User.repository'

class UserController{
    async findAll(req: Request, res: Response){
        const users = await UserRepository.findAllUsers()

        res.status(StatusCodes.OK).json(users)
    }
    async findById(req: Request, res: Response){
        const { uuid } = req.params
        try {
            const user = await UserRepository.findUserById(uuid)
            res.status(StatusCodes.OK).json(user)
        } catch (error) {
            res.status(StatusCodes.BAD_REQUEST).json({
                status: StatusCodes.NOT_FOUND,
                message: error.message
            })
        }
    }
    async createUser(req: Request, res: Response){
        const { username, password } = req.body

        try {
            const newUser = UserRepository.createUser(username, password)
            res.status(StatusCodes.CREATED).json(newUser)
        } catch (error) {
            res.status(StatusCodes.BAD_REQUEST).json({
                status: StatusCodes.BAD_REQUEST,
                message: error.message
            })
        }
        
        
    }
}

export default new UserController()