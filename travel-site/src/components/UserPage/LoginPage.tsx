import { Box, Button } from '@mui/material'
import InpField from './InpField'
import { Link } from 'react-router-dom'
import ImgPanel from './ImgPanel'

export default function LoginPage() {
  return (
    <Box sx={{display:'flex'}}>
      <ImgPanel/>
    <Box sx={{display:"flex",flexDirection:'column',gap:"25px",padding:'5rem' ,fontFamily:'monospace , serif',width:'40%'}}>
      <h1 style={{textAlign:'center'}}>Welcome Back !</h1>
      <p style={{textAlign:'center'}}>Enter your Details to Login back</p>
      <InpField title='Email'/>
      <InpField title='Password'/>
      <Button sx={{alignSelf:'center'}} variant="contained">Login</Button>
      <p>New to Our Platform ? <Link to={'/signup'} style={{cursor:'pointer'}}>Click here</Link></p>
    </Box>
    </Box>
  )
}
