import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function ProductLayout() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default ProductLayout