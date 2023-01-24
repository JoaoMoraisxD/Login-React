import React from 'react'
import {MdEmail, MdLock} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from '../button'
import { Header } from '../header'
import { Checkbox, Input } from '../input'

import { api } from '../../services/api';
import { Cadastrar, Container, Welcome, } from './styles'

const schema = yup.object({
  email: yup.string().email('E-mail não é valido').required('Campo obrigatório'),
  password: yup.string().min(6, 'No minimo 6 caracteres').required('Campo obrigatório'),
}).required();


const Login = () => {
  const navigate = useNavigate();

  const { control, handleSubmit,formState: { errors, isValid } } = useForm({
      resolver: yupResolver(schema),
      mode:'onChange',
  });


  const onSubmit = async formData => {
      try{
        const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
        if(data.length === 1){
            navigate('/home')
        }else {
          alert('Email ou senha invalido')
        }
      }catch{
        alert('Houve um erro, tente novamente.')
      }
  };


  

  return (<>
  <Header />
    <Container>
      
      <Welcome>Bem vindo de volta !</Welcome>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Input name='email' control={control} errorMesssage={errors?.email?.message} placeholder="E-mail"  leftIcon={<MdEmail />}/>
      <Input name='password' control={control} errorMesssage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
      <Checkbox />
      <Button title="Entrar" type="submit"/>
      </form>

      <Cadastrar> Não possui uma conta ? <a href='/'>Clique aqui!</a></Cadastrar>
    </Container>
    </>
  )
}

export {Login}
