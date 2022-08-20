import React from 'react'
import { Outlet } from 'react-router-dom';
import NavbarButton from './NavbarButton';
import Sidebar from './Sidebar';
import Modal from './Modal';
const SharedLayout = () => {
  return (
    <>
      <Sidebar />
      <NavbarButton />
      <Modal />

      <Outlet />
    </>
  )
}

export default SharedLayout