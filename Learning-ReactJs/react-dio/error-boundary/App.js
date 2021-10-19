import React, { Fragment } from "react"
const store= [
    {
        type: "Roupa"
    },
    {
        type: "Calçado"
    },
    {
        type: "Camisetas"
    }
]
function Column({ type }) {
    return(
        <tr>
            <td>{ type.console.name }</td>
        </tr>
    )
}
const App = () => {
    
    const renderColumns = (element, key) => (
        <Fragment key={`column-${key}`}>
            <Column type={element.type}/>
        </Fragment>
    )    
    return(
       <table>
           { store.map(renderColumns)}
       </table>
    )
}
export default App