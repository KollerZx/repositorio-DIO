import ForbiddenError from "../../Adapters/Errors/ForbiddenError";
import  GenerateTokenProvider  from "../../Providers/GenerateToken";
import { IRefreshTokenDTO } from "../../repositories/IRefreshTokenDTO";
import RefreshTokenUserRepository from "../../repositories/RefreshTokenUser.repository";

export class RefreshTokenUserUseCase{
    async execute(refresh_token_id: string){
        const refreshToken = await RefreshTokenUserRepository.findById(refresh_token_id)
        if(!refreshToken){
            throw new ForbiddenError("Refresh Token Inválido!")
        }

        const token = GenerateTokenProvider.execute(refreshToken.user_id)

        return token
    }

    async save(refreshToken: IRefreshTokenDTO): Promise<void>{
        await RefreshTokenUserRepository.save(refreshToken)
    }
}