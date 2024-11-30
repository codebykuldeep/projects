import { Box, Button } from '@mui/material'
import InpField from './InpField'
import ImgPanel from './ImgPanel'
import { useState } from 'react';
import { InputStateType } from './userPageTypes';
import { inputStateValidation } from '../utils/validation';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebaseConfig';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { userActions } from '../store/userState';


interface LoginPageProps{
  toggleAuth:()=>void;
}
const initialInputState:InputStateType ={
  error:false,
  value:'',
  errorMsg:''
}

export default function LoginPage({toggleAuth}:LoginPageProps) {

  const [emailState,setEmailState] =useState<InputStateType>(initialInputState);
  const [passwordState,setPasswordState] =useState<InputStateType>(initialInputState);
  const [loginError,setLoginError] = useState('');
  const dispatch = useDispatch<AppDispatch>();


  function updateEmailState(error:boolean,errorMsg:string,value:string){
    setEmailState({error,errorMsg,value});
  }

  function updatePasswordState(error:boolean,errorMsg:string,value:string){
    setPasswordState({error,errorMsg,value});
  }
  
  
  function handleLogin(){
    if(emailState.value && passwordState.value){
      
      signInUser();
      return;
    }
    else{
      setEmailState(inputStateValidation(emailState));
      setPasswordState(inputStateValidation(passwordState));
      
    }
    
  }

  async function signInUser(){
    try {
      const email =emailState.value || '';
      const password = passwordState.value || '';
      await signInWithEmailAndPassword(auth,email,password);
      
      dispatch(userActions.setUserState(true));
      
      
      
    } catch (error:any) {
      setLoginError(error.message.split(':')[1]);
    }
  }
  


  async function handleProviderLogin(){
    try {
      await signInWithPopup(auth,provider);
      dispatch(userActions.setUserState(true));
      
    } catch (error:any) {
      
      setLoginError(error.message.split(':')[1]);
    }
  }
 
  

  return (
    <Box sx={{display:'flex',height:'100%',width:'100%'}}>
      <ImgPanel/>
    <Box sx={{display:"flex",flexDirection:'column',gap:"20px",padding:'1rem 4rem' ,fontFamily:'monospace , serif',width:'50%'}}>
      <h1 style={{textAlign:'center'}}>Welcome Back !</h1>
      <p style={{textAlign:'center'}}>Enter your Details to Login back</p>
      <InpField title='Email' inputState={emailState} updateInputState={updateEmailState}/>
      <InpField title='Password' inputState={passwordState} updateInputState={updatePasswordState}/>
      {loginError && <Box sx={{color:'#d32f2f'}}>{loginError}</Box>}
      <Button sx={{alignSelf:'center'}} variant="contained" onClick={handleLogin}>Login</Button>
      <Button sx={{alignSelf:'center'}} variant="contained" onClick={handleProviderLogin}>Sign in with Google</Button>
      <p>New to Our Platform ? <Box component={'span'} onClick={toggleAuth} style={{cursor:'pointer'}}>Click here</Box></p>
    </Box>
    </Box>
  )
}
