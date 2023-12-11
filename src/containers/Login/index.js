import React from 'react'

import LoginImg from '../../assets/hamburgerComFundo.jpg'
import Logo from '../../assets/LogoImage.svg'
import {
  Container,
  ContainerItens,
  Label,
  Input,
  Button,
  SignInLink,
  LoginImage
} from './styles'

function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-burger" />
        <h1>Login</h1>

        <Label>Email</Label>

        <Input />

        <Label>Senha</Label>

        <Input />

        <input type="checkbox" id="Remember me" />

        <Button>Signin</Button>

        <SignInLink>
          Não possui conta ? <a>Signup</a>
        </SignInLink>

      </ContainerItens>
    </Container>
  )
}

export default Login
