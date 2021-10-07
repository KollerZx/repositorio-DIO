import React from 'react'
import Layout from "./Components/Layout"
import NoSearch from './Components/NoSearch'
import Profile from './Components/Profile'
import Repositories from './Components/Repositories'
import useGithub from './Hooks/github-hooks'
const App = () => {
  const { githubState } = useGithub()
  return (
        <Layout>
          {
          githubState.hasUser ? 
            githubState.loading ? <p>Loading...</p> : <><Profile/> <Repositories/> </>       
          :
            <NoSearch/>
          }
          
        </Layout>
  )
}
export default App