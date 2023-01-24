import React from 'react'
import { CheckContainer, ErrorText, IconContainer, InputContainer, InputText } from './style'
import { Controller } from 'react-hook-form'

const Input = ({leftIcon, name, control, errorMesssage, ...rest}) => {
  return (
    <>
    <InputContainer>
    {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
    <Controller 
     name={name}
     control={control}
     rules={{ required: true }}
     render={({ field }) => <InputText {...field} {...rest}/>}
    />
    </InputContainer>
    {errorMesssage ? <ErrorText>{errorMesssage}</ErrorText> : null}

    </>
  )
}

export {Input}

const Checkbox = ({...rest}) =>{
  return (
    <CheckContainer>
      <input type="checkbox" id='Checkbox' {...rest}/>
      <label htmlFor="Checkbox">Aceitar política de privacidade.</label>
    </CheckContainer>
  )
}

export {Checkbox}