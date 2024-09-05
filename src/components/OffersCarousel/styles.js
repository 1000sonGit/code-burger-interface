import styled from "styled-components"

export const Container = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;
    width: 100vw;

    .rec.rec-arrow {
        background-color: #9758A6;
        color: #efefef;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

        @media screen and (max-width: 412px){
            filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));            
        }
    }

    .rec.rec-arrow:hover {
        border: 2px solid #9758A6;
        background-color: #efefef;
        color: #9758A6;

    }

    .rec.rec-slider-container {
        overflow: hidden;
        position: relative;
        width: 100%;
        margin: 0 5px;       
    }

    .rec.rec-arrow:disabled {
        border: none;
        background-color: #bebebf;
        color: #efefef;
    }

    .Offer {
        display: flex;
        flex-direction: column;
        font-size: 64px;
        font-weight: 500;
        line-height: 75px;    
        text-align: center;

        width: auto;
        height: 71px;
        top: 676px;
        left: 514px;

        color: white;
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: #9758A6;

        @media screen and (max-width: 412px){
            font-size: 40px;
        }
    }

`
export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;

    p {               
        font-style: normal;
        font-size: 18px;
        font-weight: bold;
        line-height: 120%;

        color: #424242;
    }
`

export const Image = styled.img`
    width: 200px;
    height: 200px;
    margin-bottom: 8px;

    @media screen and (max-width:320px){
        width: 170px;
        height: 170px;
    } 
`

export const Button = styled.button`
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
`
