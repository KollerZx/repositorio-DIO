import { v4 } from 'uuid'
class User{
    readonly uuid: string
    username : string
    password: string

    constructor(username: string, password: string){
        this.uuid = v4()
        this.username = username
        this.password = password
    }
}

export default User