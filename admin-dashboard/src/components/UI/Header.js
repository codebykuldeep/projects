import React from 'react'
import  './Header.css';
import logo from '../../assests/logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav >
        <ul className='nav'>
            <li className='nav-logo'><img src={logo} alt="LOGO" /></li>
            {/* <li><NavLink to={'products'}>Products</NavLink></li>
            <li><NavLink to={'products/new'}>Add Product</NavLink> </li> */}
        </ul>
    </nav>
  )
}

export default Header