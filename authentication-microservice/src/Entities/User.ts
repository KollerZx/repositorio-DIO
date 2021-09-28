import { v4 } from 'uuid'
class User{
    private readonly uuid: string
    private username : string
    private password: string

    constructor(username: string, password: string){
        this.uuid = v4()
        this.username = username
        this.password = password
    }

    public getUsername(): string{
        return this.username
    }
    public getId(): string{
        return this.uuid
    }
}

export default User