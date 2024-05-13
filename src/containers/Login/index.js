import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useHistory } from 'react-router-dom'

import { useUser} from '../../hooks/UserContext'
import LoginImg from '../../assets/hamburgerComFundo.jpg'
import CodeClubImage from '../../assets/CodeClubBurger.png'

import api from '../../services/api'

import {
  Container,
  ContainerItens,
  Label,
  Input,  
  SignInLink,
  LoginImage,
  ErrorMessage
} from './styles'

import {Button} from '../../components'


export function Login() {
  const history = useHistory()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string().email("Please, enter a valid email address").required("Email is a required field"),
    password: Yup.string("Password is a required field").required().min(6, "Password must have at least 6 characters")
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
    api.post('sessions', {
      email: clientData.email,
      password: clientData.password
    }),
      {
        pending: 'Checking...',
        sucess: 'Welcome!',
        error: 'Something wrong, try again!'
      }
    
    )

    putUserData(data)
    // Após o login, direciona para a home após 2 segundos
    setTimeout(() => {
      if (data.admin){
        history.push('/orders')
      } else {
        history.push('/')
      }
      
    }, 2000);

    
    }  

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        
        <img src={CodeClubImage} className='CodeImg'/>

        <h1>Login</h1>

        <h2>Welcome back!</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>

          <Input noValidate type="email" 
          {... register("email")} 
          error={errors.email?.message}/>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Password</Label>

          <Input type= "password" 
          {... register("password")} 
          error={errors.password?.message}/>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          
          <label>
            <input type="checkbox" className="Remember_me" {... register("checked")}/>
            <span>Remember me</span>
          </label>
          
          <Button type="submit" style={{ marginTop: 24, marginBottom: 25 }}>Sign In</Button>
        </form>
        
        <SignInLink>
          Don´t have an account? <Link style={{color: 'white'}} to="/cadastro">Sign Up</Link>
        </SignInLink>

      </ContainerItens>
    </Container>
  )
}

