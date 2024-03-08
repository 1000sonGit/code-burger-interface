import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from 'react-router-dom'

import RegisterImg from '../../assets/ImageRegister.png'

import api from '../../services/api'

import {
  Container,
  ContainerItens,
  Label,
  Input,  
  SignInLink,
  RegisterImage,
  ErrorMessage
} from './styles'

import {Button} from '../../components'


export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string("Enter with your name").required("Name is a required field"),
    email: Yup.string().email("Please, enter a valid email address").required("Email is a required field"),
    password: Yup.string("Password is a required field").required().min(6, "Password must have at least 6 characters"),
    confirmPassword: Yup.string("Password is a required field").required().oneOf([Yup.ref("password")], "The passwords must be the same")
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async clientData => {
    try{
    const { status } = await api.post(
      'users', 
      {
        name: clientData.name,
        email: clientData.email,
        password: clientData.password,
        confirmPassword: clientData.password
        // checked: clientData.checked
      }, 
      { validateStatus: () => true }
      )

      if(status === 201 || status === 200){
        toast.success('Registration completed successfully')

      }
      else if(status === 409){
        toast.error('Email already exists! Use another email')
      }
      else {
        throw new Error()
      }
    
    } catch (err) {
      toast.error('System failure! Try again')
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="register-image" />
      <ContainerItens>
        
        <h1>Sign Up</h1>

        <h2>Create your account today!</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Name</Label>

          <Input noValidate type="text" 
          {... register("name")} 
          error={errors.name?.message}/>
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>

          <Input noValidate type="email" 
          {... register("email")} 
          error={errors.email?.message}/>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Password</Label>

          <Input type= "password" 
          {... register("password")} 
          error={errors.password?.message}/>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirm Password</Label>

          <Input type= "password" 
          {... register("confirmPassword")} 
          error={errors.confirmPassword?.message}/>
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          
          <label>
            <input type="checkbox" className="Remember_me" {... register("checked")}/>
            <span>I have ready and accept HCP</span>
            <a>Term & Conditions</a>
          </label>
          
          <Button type="submit" style={{ marginTop: 24, marginBottom: 25 }}>Sign Un</Button>
        </form>
        
        <SignInLink>
          Do you already have an account? <Link style={{color: 'white'}} to='/login'>Login here</Link>
        </SignInLink>

      </ContainerItens>
    </Container>
  )
}
