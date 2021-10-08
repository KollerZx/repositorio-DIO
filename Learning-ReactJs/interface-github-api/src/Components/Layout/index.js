import useGithub from '../../Hooks/github-hooks'
import Header from '../Header'

const Layout = ({ children}) =>{
    const { githubState } = useGithub()

    return (
        <section className="container text-center">
            <Header/>
            { githubState.loading ? 
            <div class="spinner-border m-5" role="status">
                <span class="visually-hidden">Loading...</span>
            </div> 
            : 
            <>{ children }</> }
        </section>
    )
}

export default Layout