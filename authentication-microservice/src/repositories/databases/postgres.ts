import dotenv from 'dotenv'
dotenv.config()
import { Pool } from 'pg'
import EnvironmentException from '../../Adapters/Errors/EnvironmentException'

if(!process.env.CONNECTION_URL){
    throw new EnvironmentException('Variável de ambiente não encontrada')
}
const connectionString = process.env.CONNECTION_URL
const db = new Pool({ connectionString })

export default db