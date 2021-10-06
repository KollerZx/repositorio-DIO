import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const WrapperTabs = styled(Tabs)`
    font-size: 1.2rem;
    width:50%;
    
`
WrapperTabs.tabsRole = "Tabs";

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    display: flex;
    margin-top:1.6em;
`
WrapperTabList.tabsRole = "TabList";
export const WrapperTab = styled(Tab)`
    border-radius: 1.6em;
    border: 1px solid #ccc;
    padding: .75em;
    margin: 1em;
    user-select: none;
    z-index:99999;
    cursor: pointer;
    
    &:focus{
        outline: none;
    }
    
    &.is-selected{
        box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
    }
` 
WrapperTab.tabsRole = "Tab";
export const WrapperTabPanel = styled(TabPanel)`
    padding:.75em;
    margin:1em;
    border: 1px solid #ccc;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
    display: none;

    &.is-selected{
        display: block;
    }

`
WrapperTabPanel.tabsRole = "TabPanel";