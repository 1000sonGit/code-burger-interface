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
    background: #373737;
    border-radius: 0 10px 10px 0;
    height: 80%;
    padding: 15px 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    form {
        display: flex;
        flex-direction: column;
        margin: 0px 70px;
    }

    h1 {
        height: 48px;       
        color: white;        
        font-size: 36px;
        font-weight: 700;
        line-height: 54px;
        letter-spacing: 0em;
        text-align: center;
    }

    h2 {        
        color: white;
        height: 21px;
        margin-top: 8px;
        margin-bottom: 46px;
        font-weight: 700;        
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;
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
    
    .CodeImg {
        margin: 80px 70px;
    }
        
`

export const Label = styled.p`
    color: white;
    width: 176px;
    height: 18px;
    margin-top: 23px;
    margin-bottom: 6px;

`

export const Input = styled.input`
    width: 349px;
    height: 35px;
    border-radius: 5px;
    padding-left: 10px;
    border: ${ props => (props.error ? '2px solid #cc1717' : 'none')};
    
`

export const SignInLink = styled.p`
    color: white;    
    margin: 0px 70px 10px 70px;

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