import styled from 'styled-components'

export const Container = styled.div`
    background: #ffffff;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    border-radius: 30px;
    display: flex;
    gap: 12px;
    padding: 16px;
    width: max-content;

    div {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        width: 180px;
        height: 202px;
    }
`

export const Image = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 10px;
`

export const ProductName = styled.p`
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
