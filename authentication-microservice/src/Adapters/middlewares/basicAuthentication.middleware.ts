import dotenv from 'dotenv'
dotenv.config()
import { NextFunction, Request, Response } from "express";
import UserRepository from "../../repositories/User.repository";
import ForbiddenError from "../Errors/ForbiddenError";

export default async function basicAuthenticationMiddleware(req: Request, res: Response, next: NextFunction){
    try {
        const authorizationHeader = req.headers['authorization']
        if(!authorizationHeader){
            throw new ForbiddenError('Informe as credenciais!')
        }
        const [ authenticationType, token ] = authorizationHeader.split(' ')
        if(authenticationType !== 'Basic' || !token){
            throw new ForbiddenError('Autenticação Inválida')
        }
        const tokenContent = Buffer.from(token, 'base64').toString('utf-8')
        const [username, password] = tokenContent.split(':')
        
        if(!username || !password){
            throw new ForbiddenError('Credenciais não preenchidas!')
        }
        const user = await UserRepository.findByUsernameAndPassword(username, password)
        if(!user){
            throw new ForbiddenError('Usuário ou Senha inválidos!')
        }

        req.user = user
    } catch (error) {
        next(error)
    }
    
    
}