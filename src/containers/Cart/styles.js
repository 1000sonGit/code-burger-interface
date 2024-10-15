import styled from "styled-components"


export const Container = styled.div`
    background: #e5e5e5;
    min-height: calc(100vh - 72px);
`

export const CartImg = styled.img`
    width: 100vw;    

`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 30px;
    padding-bottom: 30px;
    width: 100vw;

    @media screen and (max-width:962px) {
        display: flex;
        flex-direction: column;
        gap:30px;
        align-items: center;
    }
`
