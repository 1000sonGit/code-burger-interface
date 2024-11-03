import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    background: #3C3C3C;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
    width: 300px;
    top: 0;
    left: 0;

    .vertical-line{
        display: none;        
    }

    hr {
        margin: 50px 15px;
    }
    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        width: calc(100vw - 10px);
        justify-content: center;

        .vertical-line {
            display: flex;
            border-left: 1px solid #ffffff;
            border-right: 1px solid #ffffff;
            height: 60px;            
            margin: 1px 2px;
        }

        hr {
            display: none;
        }
    }
`

export const ItemContainer = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    background: ${props => 
        (props.isActive ? '#565656' : 'none')};
    border-radius: 2px;
    margin: 8px;
    padding-left: 20px;

    .icon {
        color: #ffffff;        
    }

    @media (max-width: 768px){
        padding: 0 1px;
        margin: 2px;               
    }
`

export const ListLink = styled(Link)`
    font-size: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    text-decoration: none;
    margin-left: 8px;

    @media (max-width: 768px){
        font-size: 10.5px;                
    }
`