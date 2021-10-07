import useGithub from '../../Hooks/github-hooks'
import Header from '../Header'
import * as S from './styled'

const Layout = ({ children}) =>{
    const { githubState } = useGithub()

    return (
        <S.WrapperLayout>
            <Header/>
            {githubState.loading ? <p>Loading...</p> : <>{ children }</> }
        </S.WrapperLayout>
    )
}

export default Layout