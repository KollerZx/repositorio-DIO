import PropTypes from 'prop-types'

const PetShop = (props) =>{
    const { dogs, cats, customers, customerName, onClick } = props
    return(
        <div>
            <h1>Dogs: { dogs }</h1>
            <h1>Cats: { cats }</h1>
            <div>
                Quantidade de Clientes: { customers }
            </div>
            <div>
                Nome do Cliente: { customerName }
            </div>
            <button onClick={ onClick }>Iniciar Banho</button>
        </div>
    )
}
PetShop.defaultProps = {
    dogs:1,
    cats: 0,
    customerName: "Fulano"
}
PetShop.propTypes = {
    dogs: PropTypes.number.isRequired,
    cats: PropTypes.number,
    customers: PropTypes.array,
    customerName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    status: PropTypes.oneOf(["Pending", "Done"]).isRequired
}
export {PetShop}