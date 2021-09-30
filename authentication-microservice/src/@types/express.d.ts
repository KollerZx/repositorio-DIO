import User from '../Entities/User'

declare module  'express-serve-static-core'{
    interface Request {
        user?: User
    }
}