

const RepositoryItem = ({ name, fullName, linkToRepo }) =>{
    return(
        <>
            <h2>{ name }</h2>
            <h4>Full name: </h4>
            <a href={ linkToRepo } target="_blank" rel="noreferrer">{fullName}</a>
        </>
    )
}

export default RepositoryItem