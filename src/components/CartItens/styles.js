import styled from "styled-components"


export const Container = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    padding: 10px;    
`

export const Header = styled.div`
    display: grid;
    grid-template-columns: 240px auto auto auto;
    padding: 10px;
    border-bottom: 1px solid #b5b5b5;
    gap:20px;

    p{
        font-size: 16px;
        color: #b5b5b5;
    }

    .order-header {
        padding-left: 50px;
    }

    @media screen and (max-width: 962px) {
        .empty-space, .price-header{
            display: none;
        }

        .order-header {
            padding-left: 0;
            text-align: center;
        }

        p {            
            font-size: 14px;
        }

        grid-template-columns: repeat(3, 1fr);
    }
`

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);/* minmax(150px, auto)*/
    gap: 10px 15px;
    margin-top: 10px;

    img {
        border-radius: 10px;
        height: 120px;
        width: 120px;
    }

    p {
        font-size: 16px;
        color: #000000;        
    }

    .name-container {
        width: 120px;
        word-break: break-word;
    }

    .quantity-container {
        display: flex;
        gap: 20px;

        button {
            height: 30px;
            background: transparent;
            border: none;
            font-size: 24px;
            cursor: pointer;
        }

        p {
            margin-top: 5px;
        }      
    }

    .item-group {
        display: grid;
        grid-template-columns: repeat(2, 1fr);/* minmax(150px, auto)*/
        gap: 20px;
    }

    @media screen and (max-width: 962px) {
        .price-container{
            display: none;
        }
        grid-template-columns: repeat(3, 1fr); /*minmax(150px, auto)*/
        
        p {
            font-size: 12px;
        }

        .name-container {
        width: auto;
        word-break: break-word;
        }
        
        .item-group {        
        grid-column: span 1;
        display: flex;
        flex-direction: row;
        gap: 10px;
        width: 120px;
        }

        img{
        border-radius: 10px;
        height: 50px;
        width: 50px;
        }

    }
`
export const EmptyCart = styled.div`
    padding: 20px;
    text-align: center;
    font-weight: bold;
`