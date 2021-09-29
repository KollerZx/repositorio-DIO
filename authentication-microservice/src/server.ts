import express, { urlencoded } from 'express'
import errorHandler from './Adapters/middlewares/ErrorHandler'
import { router } from './routes'

const app = express()
app.use(express.json())
app.use(urlencoded({ extended:true }))
app.use(router)
app.use(errorHandler)

app.listen(3000, () => console.log(`running in http://localhost:${3000}`))