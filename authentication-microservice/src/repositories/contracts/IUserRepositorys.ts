import User from '../../Entities/User'
export interface IUserRepositorys{
    findAllUsers() : Promise<User[]>
    findUserById(uuid: string): Promise<User>
    createUser(username: string, password: string): Promise<string>
}