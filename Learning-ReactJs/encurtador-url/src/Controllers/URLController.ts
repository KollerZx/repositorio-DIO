import { config } from '../config/Constants'
import { Request, Response } from 'express'
import shortId from 'shortid'
export class URLController{

    public async shorten(req: Request, res: Response): Promise<any>{
        const { originURL } = req.body
        
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`

        return res.status(200).json({ originURL, hash, shortURL })
    }
}