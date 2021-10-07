import { useContext } from 'react'
import { GithubContext } from '../Providers/github-provider'
const useGithub = () => {
    const {githubState, getUser, getRepos} = useContext(GithubContext)

    return {githubState, getUser, getRepos}
}
export default useGithub