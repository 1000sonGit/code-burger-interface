import React from 'react'

import LoginImg from '../../assets/hamburgerComFundo.jpg'

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
        
        <h1>Login</h1>
        <h2>Welcome back!</h2>

        <Label>Email</Label>

        <Input />

        <Label>Password</Label>

        <Input />
        
        <label>
          <input type="checkbox" className="Remember_me"/>
          <span>Remember me</span>
        </label>
        
        <Button>Sign In</Button>

        <SignInLink>
          Don´t have an account? <a>Sign Up</a>
        </SignInLink>

      </ContainerItens>
    </Container>
  )
}

export default Login
