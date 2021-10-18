import { useEffect, useState } from 'react'
import Hooks from './Hooks'
const App = () => {
    const [stateLoading, setStateLoading] = useState({
        loading: false
        
    })
    const [stateActived, setStateActivded] = useState({
        actived:true
    })

    useEffect(() => {
        setTimeout(() => {
            handleLoading()
        },3000)
    },[])
    const handleLoading = () => {
        setStateLoading({
            loading: !stateLoading.loading
        })
    }

    const onRemove = () => {
        setStateActivded({
            actived: !stateActived.actived
        })
    }
   
    return(
        <>
            <h1>USANDO HOOKS</h1>
            <button onClick={ handleLoading }> Loading </button>
            { stateActived.actived ? (<Hooks loading={stateLoading.loading}/>) : <></>}
            <button onClick={ onRemove }>Remove Elemento</button>
            
        </>
    )
}
export default App