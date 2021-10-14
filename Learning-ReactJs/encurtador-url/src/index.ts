import express, { urlencoded } from 'express'
import cors from 'cors'
import router from './routes'
const app = express()

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(router)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`))