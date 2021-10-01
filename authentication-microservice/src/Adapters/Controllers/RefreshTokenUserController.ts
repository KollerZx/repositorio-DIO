import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { RefreshTokenUserUseCase } from "../../UseCases/TokenUser/RefreshTokenUserUseCase";

class RefreshTokenUserController{
    async handle(req: Request, res: Response, next: NextFunction){
        try {
            const { refresh_token } = req.body
            const refreshTokenUserUseCase = new RefreshTokenUserUseCase()
            const token = await refreshTokenUserUseCase.execute(refresh_token)
    
            return res.status(StatusCodes.OK).json({token})
            
        } catch (error) {
            next(error)
        }
        
    }
}
export default new RefreshTokenUserController()