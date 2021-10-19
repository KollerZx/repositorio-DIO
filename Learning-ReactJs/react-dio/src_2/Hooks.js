import { useEffect, memo} from "react"

const areEqual = (prevProps, nextProps) => {
    return prevProps.loading === nextProps.loading
    
}

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
export default memo(Hooks, areEqual)