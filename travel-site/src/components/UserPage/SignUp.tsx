import { Box, Button } from '@mui/material'
import React from 'react'
import InpField from './InpField'
import { Link } from 'react-router-dom'
import ImgPanel from './ImgPanel'

function SignUp() {
  return (
    <Box sx={{display:'flex'}}>
      <ImgPanel/>
      <Box sx={{display:"flex",flexDirection:'column',gap:"25px",padding:'5rem' ,fontFamily:'monospace , serif',width:'40%'}}>
      <h1 style={{textAlign:'center'}}>Hello , Welcome</h1>
      <p style={{textAlign:'center'}}>Enter your Details to Sign up</p>
      <InpField title='Name' />
      <InpField title='Email'/>
      <InpField title='Password'/>
      <Button sx={{alignSelf:'center'}} variant="contained">Sign Up</Button>
      <p>Already a user ? <Link to={'/login'} style={{cursor:'pointer'}}>Click here</Link></p>
    </Box>
    </Box>
  )
}

export default SignUp