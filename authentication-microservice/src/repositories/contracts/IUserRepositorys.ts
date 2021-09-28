import User from '../../Entities/User'
export interface IUserRepositorys{
    findAllUsers():Promise<User[]>
}