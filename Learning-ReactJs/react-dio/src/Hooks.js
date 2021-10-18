import { useEffect} from "react"


const Hooks = (props) => {
    const { loading } = props
    //componentDidMount
    useEffect(() => {

        console.log('componentDidMount: loading', loading)
    },[])

    //componentDidUpdate
    useEffect(() => {
        console.log('componentDidUpdate', loading);
    },[loading])

    //componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('componentWillUnmount: Componente removido');
        }
    }, [])
    return (
        <>
            <h2>Teste</h2>
        </>
    )
}
export { Hooks }