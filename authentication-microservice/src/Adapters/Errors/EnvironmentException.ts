export default class EnvironmentException extends Error{
    constructor(
        public message: string,
        public error?: any    
        ){
        super(message)
    }
}
