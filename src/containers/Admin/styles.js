import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    min-width: 100vw;
    background: #efefefef;
    justify-content: flex-start;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;        
    }
`
export const ContainerItens = styled.div`
    padding: 20px;
    width: 100vw;
`