import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --button-width: 40vw; /* Defina a largura do botão aqui */

    @media screen and (min-width: 400px){
        --button-width: 120px;
    }
  }
`

export const ContainerButton = styled.button`
    width: var(--button-width); 
    height: 33px;    
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    border-radius: 25px;
    background: #9758A6;
    color: white;
    border: 3px solid white;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        border: 3px solid blue;
    }

    &:active {
        opacity: 0.6;
    };

`