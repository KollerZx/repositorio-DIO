import { useContext } from 'react'
import { ThemeContext } from './Theme'

const Form = () => {
    const context = useContext(ThemeContext)
    const renderForm = (
        <form>
            <label>Nome:</label>
            <input/>
            <label>E-mail:</label>
            <input/>
            <label>Idade:</label>
            <input/>
            <label>Telefone:</label>
            <input/>
        </form>
    )
    
    const renderNotLogged = (
        <h1>É necessário realizar o Login</h1>
    )

    return(
        <>
            { !context.token ? renderNotLogged: renderForm }
        </>
    )
}
export { Form }