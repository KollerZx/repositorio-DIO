import IUserDTO from '../IUserDTO';
export interface IUserRepositorys{
    findAll() : Promise<IUserDTO[]>
    findById(uuid: string): Promise<IUserDTO>
    create(uuid: string, username: string, password: string): Promise<void>
    update(uuid: string, username: string, password: string): Promise<void>
    remove(uuid: string): Promise<void>
    findByUsernameAndPassword(username: string, password: string): Promise<IUserDTO>
}