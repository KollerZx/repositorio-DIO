import React from 'react'
import Layout from "./Components/Layout"
import Profile from './Components/Profile'
import Repositories from './Components/Repositories'
import { GlobalCSS } from './Global/globalCSS'
import GithubProvider from './Providers/github-provider'

const App = () => {
  return (
    <main>
      <GithubProvider>
        <GlobalCSS/>
        <Layout>
          <Profile/>
          <Repositories/>
        </Layout>
      </GithubProvider>
    </main>
  )
}
export default App