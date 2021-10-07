import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    width:100%;
    justify-content: space-between;
    padding:1em;

    input{
        border:1px solid #ccc;
        border-radius:0.5em;
        width:100%;
        padding: .5em;
        font-size:1rem;
    }
    button{
        background-color:#ccc;
        padding:0.75em;
        font-size:1rem;
        font-weight:500;
        border-radius:1em;
        margin: 0 2em 0 2em;
        transition: .3s ease;

        &:hover{
            box-shadow: 0 0 1.5em rgba(0, 0, 0, 0.3);
        }
    }
    
`