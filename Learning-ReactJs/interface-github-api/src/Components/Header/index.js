import { useState } from 'react'
import useGithub from '../../Hooks/github-hooks'
const Header = () => {

    const { getUser } = useGithub()
    const [usernameForSearch, setUsernameForSearch] = useState()
    const submitGetUser = () => {
        if(!usernameForSearch) return
        return getUser(usernameForSearch)
    }
    return(
        <header>
            <div className="d-flex p-5">
                <input class="form-control me-2" type="search" placeholder="Digite o Username" aria-label="Search" onChange={ event => setUsernameForSearch(event.target.value)}/>
                <button class="btn btn-outline-success" type="submit" onClick={ submitGetUser }>Search</button>
            </div>
        </header>
    )
    
}

export default Header