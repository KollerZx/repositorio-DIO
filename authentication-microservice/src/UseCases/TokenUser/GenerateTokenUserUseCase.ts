import GenerateRefreshToken from "../../Adapters/Providers/GenerateRefreshToken";
import GenerateTokenProvider from "../../Adapters/Providers/GenerateToken";

class GenerateTokenUserUseCase{

    async execute(userId: string, username?: string){
        const token = await GenerateTokenProvider.execute(userId)
        const refresh_token = await GenerateRefreshToken.execute(userId, username)
    
        return { token, refresh_token }
    }
}

export default new GenerateTokenUserUseCase()