import express, { urlencoded } from 'express'
import { router } from './routes'

const app = express()
app.use(express.json())
app.use(urlencoded({ extended:true }))
app.use(router)


app.listen(3000, () => console.log(`running in http://localhost:${3000}`))