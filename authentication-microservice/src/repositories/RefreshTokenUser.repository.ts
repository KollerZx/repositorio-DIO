import database from '../repositories/databases/postgres'
import { IRefreshTokenDTO } from './IRefreshTokenDTO'

class RefreshTokenUserRepository{
    private postgres = database

    async findById(refresh_token_id: string){
        const query = `SELECT * FROM refresh_token
        WHERE uuid = $1
        `
        const values = [refresh_token_id]
        const { rows } = await this.postgres.query<IRefreshTokenDTO>(query, values)
        const [ refreshToken ] = rows

        return refreshToken
    }
    
    async save(refreshToken: IRefreshTokenDTO): Promise<void>{
        const query = `
        INSERT INTO refresh_token
        (uuid, expiresIn, username, user_id) VALUES
        ($1, $2, $3, $4)
        `
        const values = [refreshToken.uuid, refreshToken.expiresIn, refreshToken.username, refreshToken.user_id]
        await this.postgres.query(query, values)
    }
}

export default new RefreshTokenUserRepository()