import GithubProvider from "./Providers/github-provider"
import App from './App'
const Providers = () => {
    return(
        <main>
            <GithubProvider>
                <App/>
            </GithubProvider>
        </main>
    )
}

export default Providers