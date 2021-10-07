import { GlobalCSS } from "./Global/globalCSS"
import GithubProvider from "./Providers/github-provider"
import App from './App'
const Providers = () => {
    return(
        <main>
            <GithubProvider>
                <GlobalCSS/>
                <App/>
            </GithubProvider>
        </main>
    )
}

export default Providers