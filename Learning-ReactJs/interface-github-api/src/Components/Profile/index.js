import useGithub from '../../Hooks/github-hooks'

const Profile = () => {
    const { githubState } = useGithub()
    return (
        <div id="profile" class="container rounded p-5">
            <div class="row card-profile p-3">
                <div class="col-lg-4 mt-3">
                    <img src={githubState.user.avatar_url} alt="Avatar do Usuário" className="rounded-circle" />
                </div>
                <div class="col-lg-6 d-flex flex-column align-items-start mx-4 mt-3">
                    <h1>{githubState.user.name}</h1>
                    <div className="d-flex align-items-center mt-2">
                        <h3>Username: </h3>
                        <a className="nav-link" href={githubState.user.html_url} target="_blank" rel="noreferrer"><h4>{githubState.user.login}</h4></a>
                    </div>
                    <div class="row">
                        <div class="col mt-2">
                            <h4>Followers: </h4>
                            <p>{githubState.user.followers}</p>
                        </div>
                        <div class="col mt-2">
                            <h4>Followings: </h4>
                            <p>{githubState.user.following}</p>
                        </div>
                        <div class="col mt-2">
                            <h4>Repos: </h4>
                            <p>{githubState.user.public_repos}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile


