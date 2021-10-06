import { createContext, useState } from 'react'

export const GithubContext = createContext({
    user:{},
    repositories:[],
    starred:[]
})


const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        user:{
            login: undefined,
            avatar:"https://avatars.githubusercontent.com/u/38964774?v=4",
            name:undefined,
            publicUrl:undefined,
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
    
    return <GithubContext.Provider value={ githubState }>{ children }</GithubContext.Provider >
}

export default GithubProvider