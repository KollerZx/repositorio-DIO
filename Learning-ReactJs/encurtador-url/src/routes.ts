import {URLController} from './Controllers/URLController'
import { Request, Response, Router } from 'express'

const router = Router()
const urlController = new URLController()

router.post('/shorten', async ( req: Request, res: Response) => await urlController.shorten(req,res))

export default router