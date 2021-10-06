import React from 'react'
import Layout from "./Components/Layout"
import Profile from './Components/Profile'
import Repositories from './Components/Repositories'
import { GlobalCSS } from './Global/globalCSS'

const App = () => {
  return (
    <main>
      <GlobalCSS/>
      <Layout>
        <Profile/>
        <Repositories/>
      </Layout>
    </main>
  )
}
export default App