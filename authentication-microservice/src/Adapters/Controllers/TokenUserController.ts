import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import IUserDTO from "../../repositories/IUserDTO";
import GenerateTokenUserUseCase from "../../UseCases/TokenUser/GenerateTokenUserUseCase";
import ForbiddenError from "../Errors/ForbiddenError";

class TokenUserController{
    async execute(req: Request, res: Response, next: NextFunction){
        try {
            const user: IUserDTO = req.user
            if (!user) {
                throw new ForbiddenError('Usuário não informado!')
            }
            const { token, refresh_token } = await GenerateTokenUserUseCase.execute(user.uuid, user.username)
            
            res.status(StatusCodes.OK).json({ token, refresh_token })
        } catch (error) {
            next(error)    
        }
        
    }
}
export default new TokenUserController()