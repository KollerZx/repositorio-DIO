import db from '../config/db'
import User from "../Entities/User";
import { IUserRepositorys } from "./contracts/IUserRepositorys";
import dotenv from 'dotenv'
dotenv.config()
class UserRepository implements IUserRepositorys{
    async findAllUsers(): Promise<User[]> {
        const query = `SELECT uuid, username FROM application_user`
        const {rows}  = await db.query<User>(query)
        return rows
    }
    async findUserById(uuid: string): Promise<User> {
        const query = `SELECT uuid, username FROM application_user WHERE uuid= $1`
        const values = [uuid]
        const {rows} = await db.query<User>(query, values)
        if(rows.length === 0){
            throw new Error('Usuário não existe')
        }
        const [user] = rows
        return user
    }
    async createUser(username: string, password: string): Promise<string> {
        const user = new User(username, password)
        
        //TODO: Implementar bcrypt para encriptar senhas
        const values = [user.uuid, user.username, password, process.env.PASS_SALT]
        const script = `
            INSERT INTO application_user
            (uuid, username, password) VALUES
            ($1, $2, crypt($3, $4))
        `
        await db.query(script, values)
        
        return user.uuid

        
    }

}

export default new UserRepository()