import { Box } from '@mui/material'
import img1 from '../../assets/homepage/slider/img-1.jpg'

function Slider() {
  return (
    <Box sx={{width:'100%',height:'100%'}}>
        <Box sx={{ display:'flex',justifyContent:'space-between',padding:'1rem'}}>
            <Box sx={{width:'280px',height:'200px'}}>
                <img src={img1} style={{width:'280px',height:'200px' ,maxWidth:'400px'}} alt="slider img" />
            </Box>
            <Box sx={{width:'280px',height:'200px'}}>
                <img src={img1} style={{width:'280px',height:'200px' ,maxWidth:'400px'}} alt="slider img" />
            </Box>
            <Box sx={{width:'280px',height:'200px'}}>
                <img src={img1} style={{width:'280px',height:'200px' ,maxWidth:'400px'}} alt="slider img" />
            </Box>
        </Box>
    </Box>
  )
}

export default Slider