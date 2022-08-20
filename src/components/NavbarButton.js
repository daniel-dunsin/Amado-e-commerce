import React from 'react'
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from './context';
const NavbarButton = () => {
  const {openSidebar} = useGlobalContext();
  return <NavbarButtonStyled className='h3' onClick={openSidebar}>
    <FaBars />
  </NavbarButtonStyled>
}

const NavbarButtonStyled = styled.div`
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 5;
`

export default NavbarButton