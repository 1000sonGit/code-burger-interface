import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;

    .rec.rec-arrow {
        background-color: #9758A6;
        color: #efefef;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .rec.rec-arrow:hover {
        border: 2px solid #9758A6;
        background-color: #efefef;
        color: #9758A6;

    }

    .rec.rec-arrow:disabled {
        border: none;
        background-color: #bebebf;
        color: #efefef;
    }

    .Categories {
        display: flex;
        flex-direction: column;
        font-size: 64px;
        font-weight: 500;
        line-height: 75px;    
        text-align: center;

        width: 412px;
        height: 71px;
        top: 676px;
        left: 514px;

        color: white;
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: #9758A6;
    }

`
export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    
`

export const Image = styled.img`
    width: 200px;
    height: 200px;    
`

export const Button = styled(Link)`
    margin-top: 16px;
    background: #9758A6;
    height: 50px;
    border-radius: 8px;
    gap: 10px;
    border: none;

    font-size: 24px;
    font-weight: bold;
    line-height: 18px;
    line-height: 100%;
    text-align: center;
    color: #ffffff;

    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }

    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`
