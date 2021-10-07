import { createContext, useCallback, useState } from 'react'
import api from '../Components/Services/api'
export const GithubContext = createContext({
    loading:false,
    user:{},
    repositories:[],
    starred:[]
})

const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        loading:false,
        user:{
            login: undefined,
            avatar_url:undefined,
            name:undefined,
            html_url:undefined,
            blog:undefined,
            company:undefined,
            location:undefined,
            followers:0,
            following:0,
            public_gists:0,
            public_repos:0

        },
        repositories:[],
        starred:[]
    })

    
    const getUser = async username =>{
        setGithubState( prevState => ({
            ...prevState,
            loading: !prevState.loading
        }))
        const { data } = await api.get(`users/${username}`)
        
        const {
            login,
            avatar_url,
            name,
            html_url,
            blog,
            company,
            location,
            followers,
            following,
            public_gists,
            public_repos } = data

            setGithubState( prevState => ({
                ...prevState,
                loading:!prevState.loading,
                user:{
                    login,
                    avatar_url,
                    name,
                    html_url,
                    blog,
                    company,
                    location,
                    followers,
                    following,
                    public_gists,
                    public_repos
                } 
            }))
            return githubState
    }

    // TODO: setar repositorios e renderizar
    const getRepos = async (username) => {
        const { data } = await api.get(`/users/${username}/repos`)
        console.log(data)
        const { name, full_name, html_url} = data
        setGithubState( prevState => ({
            ...prevState,
            repositories: githubState.repositories.push({name, full_name, html_url})
        }))

        return githubState
    }
    
    

    const contextValue = {
        githubState,
        getUser: useCallback(username => getUser(username),[getUser]),
        getRepos: useCallback(username => getRepos(username), [getRepos])
    }
    return <GithubContext.Provider value={ contextValue }>{ children }</GithubContext.Provider >
}

export default GithubProvider