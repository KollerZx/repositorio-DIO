import RepositoryItem from '../Repository-item'
import * as S from './styled'
const Repositories = () => {
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
                    name="calculate-average-price.github.io" 
                    fullName="KollerZx/calculate-average-price.github.io" 
                    linkToRepo="https://github.com/KollerZx/calculate-average-price.github.io"
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>Starred</S.WrapperTabPanel>
        </S.WrapperTabs>
    )
}
export default Repositories
