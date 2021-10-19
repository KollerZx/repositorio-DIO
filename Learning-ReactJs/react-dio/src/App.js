import { ThemeContext, themes } from './Theme'
import { Card } from './Card'
import { useEffect, useState } from 'react'
const App = () => {
    const [token, setToken] = useState()
    useEffect(() => {
        setTimeout(() => {
            setToken('3434564654ad4ad78f')
        }, 4000)
    },[setToken])
    return(
        <ThemeContext.Provider value={{ ...themes.primary, token }}>
            <h1>CONTEXT API</h1>
            <Card/>
        </ThemeContext.Provider>
    )
}
export default App