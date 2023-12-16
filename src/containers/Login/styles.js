import styled from 'styled-components'

import Background from '../../assets/papelDeParede.jpg'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url('${Background}');
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginImage = styled.img`
    height: 80%;
    border-radius: 10px 0 0 10px;
`

export const ContainerItens = styled.div`
    background: rgba(111, 111, 111);
    border-radius: 0 10px 10px 0;
    height: 80%;
    padding: 15px 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    form {
        display: flex;
        flex-direction: column;
    }

    h1 {
        width: 141px;
        height: 48px;
        margin-top: 92px;        
        color: white;        
        font-size: 36px;
        font-weight: 700;
        line-height: 54px;
        letter-spacing: 0em;
        text-align: left;
    }

    h2 {        
        color: white;
        width: 113px;
        height: 21px;
        margin-top: 8px;
        margin-bottom: 46px;
        font-weight: 700;        
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
    }

    img {
        margin-top: 0;
    }

    .Remember_me {
        margin-top: 24px;
    }

    .Remember_me + span {
        margin-left: 10px;        
        color: white;
        font-weight: 400;
    }   
        
`

export const Label = styled.p`
    color: white;
    width: 176px;
    height: 18px;
    margin-top: 23px; 

`

export const Input = styled.input`
    width: 349px;
    height: 35px;
    border-radius: 5px;
    padding-left: 10px;
    border: ${ props => (props.error ? '2px solid #cc1717' : 'none')};
    
`

export const Button = styled.button`
    width: 163px;
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
    margin-top: 24px;
    margin-bottom: 25px;

    &:hover {
        opacity: 0.8;
        border: 3px solid blue;
    }

    &:active {
        opacity: 0.6;
    }
;

`

export const SignInLink = styled.p`
    color: white;    
    margin-bottom: 69px;

    a {
        color: white;
        text-decoration: underline;
        margin-left: 20px;
        
        &:hover {
        opacity: 0.8;
        text-decoration: none;
    }

    }

`
export const ErrorMessage = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: yellow;
    margin-top: 2px;
`