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

export const RegisterImage = styled.img`
    height: 690px;    
    border-radius: 10px 0 0 10px;
    box-sizing: border-box;
`

export const ContainerItens = styled.div`
    background: rgba(111, 111, 111);
    border-radius: 0 10px 10px 0;
    height: 690px;
    padding: 15px 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;

    form {
        display: flex;
        flex-direction: column;
    }

    h1 {
        width: 141px;
        height: 48px;
        margin-top: 10px;        
        color: white;        
        font-size: 36px;
        font-weight: 700;
        line-height: 54px;
        letter-spacing: 0em;
        text-align: left;
    }

    h2 {        
        color: white;
        width: 169px;
        height: 21px;
        margin-top: 8px;
        margin-bottom: 10px;
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

export const Label = styled.p`
    color: white;
    width: 176px;
    height: 18px;
    /* margin-top: ${ props => (props.error ? '12px' : '28px')}; */
    margin-top: 12px;
    margin-bottom: 3px;

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