import styled from 'styled-components'

export const Container = styled.div`
    background: #ffffff;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    border-radius: 30px;
    display: flex;
    gap: 12px;
    padding: 16px;
    width: 98vw;

    div {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        min-width: min-content;
        height: 202px;
    }
    @media screen and (min-width: 400px){
        width: 360px;
    }
`

export const Image = styled.img`
    --debug: 200px;
    height: var(--debug);
    width: var(--debug);
    border-radius: 10px;

    @media screen and (max-width:400px){
        --debug: 160px;
    }
`

export const ProductName = styled.p`
    
    width: var(--button-width);
    font-size: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    word-break: break-word;

    color: #000000;

    
`

export const ProductPrice = styled.p`
    font-size: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-top: 30px;

    color: #000000;
`
