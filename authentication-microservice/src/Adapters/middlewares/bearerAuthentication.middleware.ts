import dotenv from 'dotenv'
dotenv.config()
import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";
import ForbiddenError from "../Errors/ForbiddenError";

export default async function bearerAuthenticationMiddleware(req: Request, res: Response, next: NextFunction){
    try {
        const authorizationHeader = req.headers['authorization']
        if(!authorizationHeader){
            throw new ForbiddenError('Informe as credenciais!')
        }
        const [ authenticationType, token ] = authorizationHeader.split(' ')
        if(authenticationType !== 'Bearer' || !token){
            throw new ForbiddenError('Autenticação Inválida')
        }
        const secretKey: string = process.env.JWT_SECRET 
        const tokenPayload = JWT.verify(token, secretKey)
        
        if(typeof tokenPayload !== 'object' || !tokenPayload.sub){
            throw new ForbiddenError('Token Inválido')
        }
        
        const user = {
            uuid: tokenPayload.sub,
            username: tokenPayload.username
        }

        req.user = user
        next()
    } catch (error) {
        next(error)
    }
}