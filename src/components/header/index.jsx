import React from 'react'
import { Logo, Nav, NomeEmpresa } from './style'
import bannerImage from "../../assets/logo.png";


const Header = () => {
  return (<>
    <Nav>
      <Logo>
        <img src={bannerImage} alt="" />
      </Logo>
      <NomeEmpresa>Sua empresa aqui!</NomeEmpresa>
    </Nav>
    </>)
}

export {Header}