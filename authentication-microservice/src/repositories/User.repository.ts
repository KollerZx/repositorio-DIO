import dotenv from 'dotenv'
dotenv.config()
import database from './databases/postgres'
import User from "../Entities/User";
import DatabaseError from './Errors/DatabaseError';
import { IUserRepositorys } from "./contracts/IUserRepositorys";
import IUserDTO from './IUserDTO';
class UserRepository implements IUserRepositorys{
    private postgres = database

    async findAllUsers(): Promise<IUserDTO[]> {
        const query = `SELECT uuid, username FROM application_user`
        const {rows}  = await this.postgres.query<IUserDTO>(query)
        return rows
    }

    async findUserById(uuid: string): Promise<IUserDTO> {
        try{
            const query = `SELECT uuid, username FROM application_user WHERE uuid= $1`
            const values = [uuid]
            const {rows} = await this.postgres.query<IUserDTO>(query, values)
            if(rows.length === 0){
                throw new DatabaseError("Usuário não existe")
            }
            const [user] = rows
            return user
        }catch(error){
            throw new DatabaseError("Erro na consulta por Id", error)
        }   
    }

    async findByUsernameAndPassword(username: string, password: string): Promise<IUserDTO | null> {
        try {
            const query = `
                SELECT uuid, username
                FROM application_user
                WHERE username = $1
                AND password = crypt($2, $3)
            `
            
            const values = [username, password, process.env.PASS_SALT]
            const { rows } = await this.postgres.query<IUserDTO>(query, values)
            const [user] = rows
            return user || null
        } catch (error) {
            throw new DatabaseError("Erro na consulta por username e password", error)
        }
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
        await this.postgres.query(script, values)
        return user.uuid
    }
    async updateUser(uuid: string, username: string, password: string): Promise<void> {
            try{
                await this.findUserById(uuid)
                //TODO: Implementar bcrypt para encriptar senhas
                const values = [username, password, uuid, process.env.PASS_SALT]
                const script = `
                    UPDATE application_user
                    SET
                        username = $1,
                        password = crypt($2, $4)
                    WHERE uuid = $3
                `
                await this.postgres.query(script, values)
            }
            catch(error){
                throw new DatabaseError("Não foi possível atualizar o Usuário", error)
            }
    }
    async removeUser(uuid: string): Promise<void> {
        try {
            const script = `
                DELETE 
                FROM application_user
                WHERE uuid = $1
            `
            const values = [uuid]

            await this.postgres.query(script, values)
        } catch (error) {
            throw new DatabaseError("Erro ao remover o Usuário", error)
        }
    }
}

export default new UserRepository()