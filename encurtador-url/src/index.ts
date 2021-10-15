import dotenv from 'dotenv'
dotenv.config()

import express, { urlencoded } from 'express'
import cors from 'cors'
import router from './routes'
import { MongoConnection } from './database/MongoConnection'
const app = express()
const database = new MongoConnection()
database.connect()

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(router)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`))