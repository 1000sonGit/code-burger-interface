import styled from 'styled-components'

import Background from '../../assets/papelDeParede.jpg'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url('${Background}');
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 770px){
        min-width: 320px;
        min-height: 568px;
    }

    @media screen and (max-width: 320px) and (max-height: 568px) {
        min-width: 320px;
        min-height: 568px;        
    }
`

export const RegisterImage = styled.img`
    height: 762px;
    width: auto;    
    border-radius: 10px 0 0 10px;
    box-sizing: border-box;

    @media screen and (max-width: 770px) {
        display: none;
    }
`

export const ContainerItens = styled.div`
    background: rgba(111, 111, 111);
    border-radius: 0 10px 10px 0;
    height: 762px;
    width: 340px;    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* box-sizing: border-box; */

    form {
        display: flex;
        flex-direction: column;
        margin: 0 8%;
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
        text-align: center;
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

    a {
        color: white;
        text-decoration: underline;
        margin-left: 20px;
        
        &:hover {
        opacity: 0.8;
        text-decoration: none;
    }

    }

    @media screen and (max-width: 770px) {        
        padding: 20px 0;        
        min-width: 320px;
        min-height: 568px;
        border-radius: 10px;        

        form {
            margin: 0 5px;
        }
    }

    @media screen and (max-width: 320px) and (max-height: 568px) {
        height: auto;
        width: 100%;        
        padding: 20px;        

        form {
            margin: 0 10px;
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
    width: 100%;
    max-width: 349px;
    height: 35px;
    border-radius: 5px;
    padding-left: 10px;
    border: ${ props => (props.error ? '2px solid #cc1717' : 'none')};

    @media screen and (max-width: 770px) {
        width: auto;
        height: clamp(10px, 35px, 60px);
        padding: 0;
    }

    @media screen and (max-width: 320px) and (max-height: 568px) {
        width: 100%;
        height: 35px;
        padding: 0 10px;
    }
    
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

    @media screen and (max-width: 320px) and (max-height: 568px) {
        margin: 0 10px 10px;

        a {
            margin-left: 10px;
        }
    }
`