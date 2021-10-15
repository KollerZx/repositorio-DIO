import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";
export class MongoConnection{
    public async connect(): Promise<void>{
        try{
            const urlMongo: string = process.env.URL_MONGO 
            await mongoose.connect(urlMongo)
            console.log('Database connected')
        }catch(error){
            console.error(error.message)
            process.exit(1)
        }
    }
}