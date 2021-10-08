const RepositoryItem = ({ name, fullName, linkToRepo }) =>{
    return(
        <div className="card rounded-top p-3 mx-2 my-2" style={{width:25+'rem'}}>
            <div className="card-body ">
                <h4 className="card-title">{ name }</h4>
                <a href={ linkToRepo } target="_blank" className="btn btn-secondary p-2 my-3" rel="noreferrer">{fullName}</a>
            </div>
        </div>
    )
}

export default RepositoryItem
