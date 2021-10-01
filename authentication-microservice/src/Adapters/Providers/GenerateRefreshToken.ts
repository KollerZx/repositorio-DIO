import { RefreshToken } from "../../Entities/RefreshToken";
import dayjs from 'dayjs'
import { RefreshTokenUserUseCase } from "../../UseCases/TokenUser/RefreshTokenUserUseCase";
class GenerateRefreshToken{
    
    async execute(userId: string, username?: string){
        try {
            const expiresIn = dayjs().add(15, "second").unix()
            const refreshToken = new RefreshToken(userId, expiresIn, username)
            const refreshTokenUserUsecase = new RefreshTokenUserUseCase()
            await refreshTokenUserUsecase.save(refreshToken)
            
            return refreshToken

        } catch (error) {
            console.log('erro ao salvar', error)
        }
        
    }
}
export default new GenerateRefreshToken()