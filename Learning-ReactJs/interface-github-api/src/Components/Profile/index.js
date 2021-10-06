import useGithub from '../../Hooks/github-hooks'
import * as S from './styled'

const Profile = () =>{
    const githubState = useGithub()
    {}
    return(
        <S.Wrapper>
            <S.Avatar src={ githubState.user.avatar } alt="Avatar do Usuário"/>
            <S.WrapperInfoUser>
                <h1>{ githubState.user.name }</h1>
                <S.WrapperUsername>
                    <h3>Username: </h3>
                    <a href={ githubState.user.publicUrl } target="_blank" rel="noreferrer">{ githubState.user.login }</a>
                </S.WrapperUsername>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers: </h4>
                        <span>{ githubState.user.followers }</span>
                    </div>
                    <div>
                        <h4>Starreds: </h4>
                        <span>20</span>
                    </div>
                    <div>
                        <h4>Followings: </h4>
                        <span>{ githubState.user.following }</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}

export default Profile