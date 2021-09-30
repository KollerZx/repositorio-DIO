import IUserDTO from '../IUserDTO';
export interface IUserRepositorys{
    findAllUsers() : Promise<IUserDTO[]>
    findUserById(uuid: string): Promise<IUserDTO>
    createUser(username: string, password: string): Promise<string>
    updateUser(uuid: string, username: string, password: string): Promise<void>
    removeUser(uuid: string): Promise<void>
    findByUsernameAndPassword(username: string, password: string): Promise<IUserDTO | null>
}