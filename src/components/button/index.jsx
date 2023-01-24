import React from 'react'
import { Buttoncontainer } from './style'

const Button = ({title, onClick}) => {
  return (
    <Buttoncontainer onClick={onClick}>
        {title}
    </Buttoncontainer>
    )
}

export {Button}
