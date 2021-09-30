import IUserDTO from '../repositories/IUserDTO';

declare module  'express-serve-static-core'{
    interface Request {
        user?: IUserDTO
    }
}