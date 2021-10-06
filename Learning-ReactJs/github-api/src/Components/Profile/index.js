import * as S from './styled'

const Profile = () =>{
    return(
        <S.Wrapper>
            <S.Avatar src="https://avatars.githubusercontent.com/u/38964774?v=4" alt="Avatar do Usuário"/>
            <S.WrapperInfoUser>
                <h1>Henrique Koller</h1>
                <S.WrapperUsername>
                    <h3>Username: </h3>
                    <a href="https://github.com/KollerZx" target="_blank" rel="noreferrer">KollerZx</a>
                </S.WrapperUsername>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers: </h4>
                        <span>15</span>
                    </div>
                    <div>
                        <h4>Starreds: </h4>
                        <span>20</span>
                    </div>
                    <div>
                        <h4>Followings: </h4>
                        <span>10</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}

export default Profile