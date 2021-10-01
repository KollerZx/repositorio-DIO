import User from "../../Entities/User";
import { IUserRepositorys } from "../../repositories/contracts/IUserRepositorys";

class UsersUseCase{
    private usersRepository: IUserRepositorys

    constructor(usersRepository: IUserRepositorys){
        this.usersRepository = usersRepository
    }
    async findAllUsers(){
        const users = await this.usersRepository.findAll()
        return users
    }

    async findUserById( uuid: string){
        const user = await this.usersRepository.findById(uuid)
        return user
    }
    async createUser( username: string, password: string){
        const user = new User(username, password)
        // TODO: implementar bcrypt para encriptar senhas
        await this.usersRepository.create( user.uuid, user.username, user.password)

        return { uuid: user.uuid }
    }

    async updateUser( uuid: string, username: string, password: string){
        await this.usersRepository.update(uuid, username, password)
    }
    async removeUser( uuid : string){
        await this.usersRepository.remove(uuid)
    }

    async findByUsernameAndPassword( username: string, password: string){
        const user = this.usersRepository.findByUsernameAndPassword(username, password)

        return user
    }
}
export { UsersUseCase }