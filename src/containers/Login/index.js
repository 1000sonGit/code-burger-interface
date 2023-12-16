import React from 'react'
import { useForm } from 'react-hook-form'

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data)

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        
        <h1>Login</h1>

        <h2>Welcome back!</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>

          <Input type="email" {... register("email")}/>

          <Label>Password</Label>

          <Input type= "password" {... register("password")}/>
          
          <label>
            <input type="checkbox" className="Remember_me" {... register("checked")}/>
            <span>Remember me</span>
          </label>
          
          <Button type="submit">Sign In</Button>
        </form>
        
        <SignInLink>
          Don´t have an account? <a>Sign Up</a>
        </SignInLink>

      </ContainerItens>
    </Container>
  )
}

export default Login
