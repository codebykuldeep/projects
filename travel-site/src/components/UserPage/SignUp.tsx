import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import InpField from './InpField'
import ImgPanel from './ImgPanel'
import { InputStateType } from './userPageTypes';
import { inputStateValidation } from '../utils/validation';
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth, provider } from '../../firebaseConfig';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { userActions } from '../store/userState';

interface SignUpPageProps{
  toggleAuth:()=>void;
}

const initialSignUpState:InputStateType ={
  error:false,
  value:'',
  errorMsg:''
}

function SignUp({toggleAuth}:SignUpPageProps) {
  const [emailState,setEmailState] =useState<InputStateType>(initialSignUpState);
  const [passwordState,setPasswordState] =useState<InputStateType>(initialSignUpState);
  const [nameState,setNameState] =useState<InputStateType>(initialSignUpState);
  const [signUpError,setSignUpError] =useState('');
  const dispatch =useDispatch<AppDispatch>();

  function updateEmailState(error:boolean,errorMsg:string,value:string){
    setEmailState({error,errorMsg,value});
  }
  function updatePasswordState(error:boolean,errorMsg:string,value:string){
    setPasswordState({error,errorMsg,value});
  }
  function updateNameState(error:boolean,errorMsg:string,value:string){
    setNameState({error,errorMsg,value});
  }
  function handleSignUp(){
    if(emailState.value && passwordState.value && nameState.value){
      createNewUser();
      
    }
    else{
      setEmailState(inputStateValidation(emailState));
      setPasswordState(inputStateValidation(passwordState));
      setNameState(inputStateValidation(nameState));
      
    }
  }

  async function createNewUser(){
    try {
      const displayName = nameState.value || '';
      const email =emailState.value || '';
      const password =passwordState.value || '';
       await createUserWithEmailAndPassword(auth,email,password);
      
      
      if(auth.currentUser){
        
        
        await updateProfile(auth.currentUser,{
          displayName:displayName
        })
        
        
      }
      dispatch(userActions.setUserState(true));
      
    } catch (error:any) {
      
      setSignUpError(error.message.split(':')[1]);
      
    }
  }

  async function handleProviderSignUp(){
    try {
      await signInWithPopup(auth,provider);
      
      dispatch(userActions.setUserState(true));
      
    } catch (error:any) {
      
      setSignUpError(error.message);
    }
  }
  return (
    <Box sx={{display:'flex',height:'100%',width:'100%'}}>
      <ImgPanel/>
      <Box sx={{display:"flex",flexDirection:'column',gap:"8px",padding:'0.4rem 2.5rem' ,fontFamily:'monospace , serif',width:'50%'}}>
      <h1 style={{textAlign:'center'}}>Hello , Welcome</h1>
      <p style={{textAlign:'center'}}>Enter your Details to Sign up</p>
      <InpField title='Name' inputState={nameState} updateInputState={updateNameState}/>
      <InpField title='Email'inputState={emailState} updateInputState={updateEmailState}/>
      <InpField title='Password'inputState={passwordState} updateInputState={updatePasswordState}/>
      {signUpError && <Box sx={{color:'#d32f2f'}}>{signUpError}</Box>}
      <Button sx={{alignSelf:'center'}} variant="contained" onClick={handleSignUp}>Sign Up</Button>
      <Button sx={{alignSelf:'center'}} variant="contained" onClick={handleProviderSignUp}>Sign Up with Google</Button>
      <p>Already a user ? <Box component={'span'} onClick={toggleAuth} style={{cursor:'pointer'}}>Click here</Box></p>
    </Box>
    </Box>
  )
}

export default SignUp