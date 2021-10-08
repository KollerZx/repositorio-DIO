import RepositoryItem from '../Repository-item'
import useGithub from '../../Hooks/github-hooks'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
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
                    <Tabs 
                    selectedTabClassName="is-selected"
                    selectedTabPanelClassName="is-selected"
                    className="container mt-3"    
                    >
                        <TabList className="d-flex mt-5 pagination">
                            <Tab className="rounded-3 btn btn-secondary p-2 me-2">Repositories</Tab>
                            <Tab className="rounded-3 btn btn-secondary p-2">Starred</Tab>
                        </TabList>
                        <TabPanel className="row">
                            {githubState.repositories.map(repo => {
                                return <RepositoryItem className="col" key={repo.id} name={repo.name} fullName={repo.full_name} linkToRepo={repo.html_url}/>
                            })}
                        </TabPanel>
                        <TabPanel className="row">Starred</TabPanel>
                    </Tabs>
                )
                :
                (<></>)
        }
        </>
    )
}
export default Repositories
