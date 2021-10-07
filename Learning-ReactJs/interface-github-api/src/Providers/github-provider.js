import { createContext, useCallback, useState } from 'react'
import api from '../Components/Services/api'
export const GithubContext = createContext({
    user:{},
    repositories:[],
    starred:[]
})

const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        loading:false,
        hasUser:false,
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

    
    const getUser = async username => {
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
                hasUser:true,
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

    const getUserRepos = async (username) => {
        const { data } = await api.get(`/users/${username}/repos`)
        
        setGithubState((prevState)=>({
            ...prevState,
            repositories: data
        }))
    }
    
    const contextValue = {
        githubState,
        getUser: useCallback(username => getUser(username),[getUser]),
        getUserRepos: useCallback(username => getUserRepos(username), [])
    }
    return <GithubContext.Provider value={ contextValue }>{ children }</GithubContext.Provider >
}

export default GithubProvider