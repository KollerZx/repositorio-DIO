import express, { urlencoded } from 'express'
import errorHandler from '../../Adapters/middlewares/ErrorHandler'
import jwtAuthenticationMiddleware from '../../Adapters/middlewares/jwtAuthentication.middleware'
import db from '../../repositories/databases/postgres'
import authRoute from './routes/auth.routes'
import { router } from './routes/routes'

const app = express()
app.use(express.json())
app.use(urlencoded({ extended:true }))

app.use(authRoute)
app.use(jwtAuthenticationMiddleware)
app.use(router)
app.use(errorHandler)

const PORT = process.env.PORT || 3000
const server = app.listen(3000, () => console.log(`Listening on port: ${PORT}`))

process.on('SIGTERM', () => {
    db.end(() => console.log('Database connection closed!'))

    server.close(() => console.log(`Server on ${PORT} closed`))
})