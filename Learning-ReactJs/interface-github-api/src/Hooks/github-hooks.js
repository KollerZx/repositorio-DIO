import { useContext } from 'react'
import { GithubContext } from '../Providers/github-provider'
const useGithub = () => {
    const githubState = useContext(GithubContext)

    return githubState
}
export default useGithub