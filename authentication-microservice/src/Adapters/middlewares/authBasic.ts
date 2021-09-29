import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../Errors/ForbiddenError";

export default function authBasic(req: Request, res: Response, next: NextFunction){
    try {
        const authorizationHeader = req.headers['authorization']
        if(!authorizationHeader){
            throw new ForbiddenError('Informe as credenciais!')
        }
        const [ authenticationType, token ] = authorizationHeader.split(' ')
        if(authenticationType !== 'Basic' || !token){
            throw new ForbiddenError('Autenticação Inválida')
        }
    } catch (error) {
        next(error)
    }
    
    
}