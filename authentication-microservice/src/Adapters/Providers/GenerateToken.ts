import JWT, { SignOptions } from 'jsonwebtoken'
import EnvironmentException from '../Errors/EnvironmentException'
export class GenerateTokenProvider {

    async execute(userId: string) {
        const jwtPayload = { }
        const jwtOptions: SignOptions = {
            algorithm: 'HS256',
            subject: userId,
            expiresIn: '15 min'
        }
        if (!process.env.JWT_SECRET) {
            throw new EnvironmentException('Variável de ambiente não encontrada')
        }
        const secretKey: string = process.env.JWT_SECRET
    
        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions)
        return jwt
    
    }
}

export default new GenerateTokenProvider()