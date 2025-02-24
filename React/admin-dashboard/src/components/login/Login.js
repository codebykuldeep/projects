import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FieldError from '../form-page/FieldError';
import './Login.css'
import LoginPhoto from '../../assests/login.jpg'

function Login() {
  const navigate = useNavigate();
  const [error,setError] = useState(false);
  const [show,setShow ] =useState(false);
  const [emptyField ,setEmptyField] = useState({email:false,password:false})


  function handleLogin(event){
    event.preventDefault();
    const form = new FormData(event.target);
    const data =Object.fromEntries(form.entries());

    if(data.email === '' || data.password === ''){
      let obj ={...emptyField};
      
      for(let [field,value] of Object.entries(data)){
        if(value===''){
          obj={...obj,[field]:true};
        }
      }
      
      setEmptyField(obj);
    }
    else if(data.email === 'test@email.com' && data.password === '123456'){
      localStorage.setItem('login',true);
      
      
      navigate('/products');
    }else{
      setError(true);
    }
    
  }
  
  function handleInputField(event){
    setEmptyField(prev=>({...prev,[event.target.name]:false}));
  }
  return (
    <div className='login-container'>
      
      <form method='POST' className='login-form' onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className='login-input'>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' name='email'  onFocus={handleInputField}/>
          {emptyField.email && <FieldError error={'This field cannot be empty'} />}
        </div>

        <div className='login-input'>
          <label htmlFor="password">Password</label>
          <div className='login-password'>
            <input type={show ? 'text' : 'password'} id='password' name='password' onFocus={handleInputField}/>
            <div className='show-icon' onClick={()=>setShow(prev=>!prev)}>
              {!show && <i className="fa-regular fa-eye-slash" />}
              {show &&<i className="fa-regular fa-eye"></i>}
            </div>
          </div>
          {emptyField.password && <FieldError error={'This field cannot be empty'} />}
        </div>

        {
          error && (
            <div className='login-error'>
              <FieldError error={'Either the email ID or the password is incorrect!'}/>
            </div>
          )
        }
        <div className='login-button'>
          <button type='submit'>Login</button>
        </div>
        <div className='login-detail'>id - test@email.com  password-123456</div>
      </form>
      <div className='login-img'>
        <img src={LoginPhoto} alt="Login" />
      </div>
      
    </div>
  )
}

export default Login