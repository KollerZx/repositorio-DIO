import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 2em;

`
export const Avatar = styled.img`
    max-width: 250px;
    border-radius: 50%;

`
export const WrapperUsername = styled.div`
    display:flex;
    align-items: center;
    h3{
        margin-right: .5em;
    }
`
export const WrapperStatusCount = styled.div`
    display:flex;
    width:100%;
    max-width:540px;
    align-items:center;
    justify-content: space-between;
    div{
        text-align: center;
    }
    `
export const WrapperInfoUser = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: space-between;
    width:100%;
    margin: 2em 0 0 2em;
    
`