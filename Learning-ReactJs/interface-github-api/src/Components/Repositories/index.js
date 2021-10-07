import RepositoryItem from '../Repository-item'
import useGithub from '../../Hooks/github-hooks'
import * as S from './styled'
import { useEffect, useState } from 'react'

const Repositories = () => {

    const { githubState, getUserRepos } = useGithub()
    const [hasUserSearchForRepos, setHasUserSearchForRepos] = useState(false)

    useEffect(async () =>{
        if(githubState.user.login){
            await getUserRepos(githubState.user.login)
        }
        setHasUserSearchForRepos(true)
    }, [githubState.user])

    return(
        <>
            {hasUserSearchForRepos ?
                (
                    <S.WrapperTabs 
                    selectedTabClassName="is-selected"
                    selectedTabPanelClassName="is-selected"    
                    >
                        <S.WrapperTabList>
                            <S.WrapperTab>Repositories</S.WrapperTab>
                            <S.WrapperTab>Starred</S.WrapperTab>
                        </S.WrapperTabList>
                        <S.WrapperTabPanel>
                            {githubState.repositories.map(repo => {
                                return <RepositoryItem key={repo.id} name={repo.name} fullName={repo.full_name} linkToRepo={repo.html_url}/>
                            })}
                        </S.WrapperTabPanel>
                        <S.WrapperTabPanel>Starred</S.WrapperTabPanel>
                    </S.WrapperTabs>
                )
                :
                (<></>)
        }
        </>
    )
}
export default Repositories
