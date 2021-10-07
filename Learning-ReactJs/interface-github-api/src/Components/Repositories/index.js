import RepositoryItem from '../Repository-item'
import useGithub from '../../Hooks/github-hooks'
import * as S from './styled'
const Repositories = () => {

    const {githubState} = useGithub()
    return(
        <S.WrapperTabs 
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"    
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem 
                    name={githubState.repositories.name} 
                    fullName={githubState.repositories.full_name} 
                    linkToRepo={githubState.repositories.html_url}
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>Starred</S.WrapperTabPanel>
        </S.WrapperTabs>
    )
}
export default Repositories
