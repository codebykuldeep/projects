import React from 'react'
import  './Header.css';
import logo from '../../assests/logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  function handleLogout(){
    const user = localStorage.getItem('login');
   
    if(user){
      localStorage.clear();
    }
    navigate('/login');
  }
  return (
    <nav >
        <ul className='nav'>
            <li className='nav-logo'><img src={logo} alt="LOGO" /></li>
            {/* <li><NavLink to={'products'}>Products</NavLink></li>
            <li><NavLink to={'products/new'}>Add Product</NavLink> </li> */}
            <li onClick={handleLogout}>Logout</li>
        </ul>
    </nav>
  )
}

export default Header