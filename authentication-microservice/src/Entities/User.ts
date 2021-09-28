import { uuid } from 'uuidv4'
class User{
    private readonly uuid: string
    private username : string
    private password: string

    constructor(username: string, password: string){
        this.uuid = uuid()
        this.username = username
        this.password = password
    }
}

export default User