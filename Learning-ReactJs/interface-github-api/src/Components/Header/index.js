import { useState } from 'react'
import useGithub from '../../Hooks/github-hooks'
import * as S from './styled'
const Header = () => {

    const { getUser } = useGithub()
    const [usernameForSearch, setUsernameForSearch] = useState()
    const submitGetUser = () => {
        if(!usernameForSearch) return
        return getUser(usernameForSearch)
    }
    return(
        <header>
            <S.Wrapper>
                <input type="text" placeholder="Digite o Username" onChange={ event => setUsernameForSearch(event.target.value)}></input>
                <button type="submit" onClick={ submitGetUser }>Search</button>
            </S.Wrapper>
        </header>
    )
    
}

export default Header