import { PetShop } from './PetShop'
const App = () =>{
    const handleClick = () => {
        console.log('iniciando banho!...')
    }
    return(
        <>
            <PetShop 
                dogs={2}
                customerName="Henrique Koller"
                onClick = { handleClick }
                status= {"Done"}
            />
        </>
    )
}

export default App