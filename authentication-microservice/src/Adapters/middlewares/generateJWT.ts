import { Request, Response, NextFunction } from 'express'
import JWT, { SignOptions } from 'jsonwebtoken'
import EnvironmentException from '../Errors/EnvironmentException'
import ForbiddenError from '../Errors/ForbiddenError'
export default function generateJWT(req: Request, res: Response, next: NextFunction){
    try { 
        const user = req.user
        if(!user){
            throw new ForbiddenError('Usuário não informado!')
        }
        const jwtPayload = { username: user.username }
        const jwtOptions: SignOptions = {
            algorithm:'HS256', 
            subject: user?.uuid,
            expiresIn: '15 min'
        }
        if(!process.env.JWT_SECRET){
            throw new EnvironmentException('Variável de ambiente não encontrada')
        }
        const secretKey: string = process.env.JWT_SECRET
        
        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions )
        return jwt
    } catch (error) {
        next(error)
    }
    
}