import { NextFunction, Request, Response } from 'express';
import {StatusCodes} from 'http-status-codes'
import { DatabaseError } from 'pg';
import UserRepository from '../repositories/User.repository'

class UserController{
    async findAll(req: Request, res: Response, next: NextFunction){
        const users = await UserRepository.findAllUsers()

        res.status(StatusCodes.OK).json(users)
    }
    async findById(req: Request, res: Response, next: NextFunction){
        const { uuid } = req.params
        try {
            const user = await UserRepository.findUserById(uuid)
            res.status(StatusCodes.OK).json(user)
        } catch (error) {
            next(error)
        }
    }
    async createUser(req: Request, res: Response, next: NextFunction){
        const { username, password } = req.body

        try {
            const newUser = UserRepository.createUser(username, password)
            res.status(StatusCodes.CREATED).json(newUser)
        } catch (error) {
            next(error)
        }
    }

    async updateUser(req: Request, res: Response, next: NextFunction){
        const { username, password } = req.body
        const { uuid } = req.params
        try {
            await UserRepository.updateUser(uuid, username, password)
            res.status(StatusCodes.OK).send()
        } catch (error) {
            next(error)
        }
    }
    async removeUser(req: Request, res: Response, next: NextFunction){
        const { uuid } = req.params
        try {
            await UserRepository.removeUser(uuid)
            res.status(StatusCodes.OK).send()
        } catch (error) {
            next(error)
        }
    }
}

export default new UserController()