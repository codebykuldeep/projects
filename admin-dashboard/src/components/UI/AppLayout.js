import React from 'react'
import Header from './Header'
import { Outlet, redirect, useNavigate } from 'react-router-dom'

function AppLayout() {
  

  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default AppLayout