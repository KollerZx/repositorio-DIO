import { v4 }from 'uuid'

export class RefreshToken{
    public readonly uuid : string
    public expiresIn : number
    public username?: string
    public user_id: string

    constructor(user_id: string, expiresIn: number, username?: string){
        this.uuid = v4()
        this.user_id = user_id
        this.expiresIn = expiresIn
        this.username = username || ''
    }
}