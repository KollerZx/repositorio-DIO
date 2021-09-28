import db from '../config/db'
import User from "../Entities/User";
import { IUserRepositorys } from "./contracts/IUserRepositorys";
class UserRepository implements IUserRepositorys{
    async findAllUsers(): Promise<User[]> {
        const query = `SELECT uuid, username FROM application_user`
        const users  = await db.query<User>(query)
        return users
    }

}

export default new UserRepository()