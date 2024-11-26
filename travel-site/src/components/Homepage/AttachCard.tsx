import { Box } from '@mui/material'


function AttachCard() {
  return (
    <Box sx={{width:'100%',height:'50px',position:'relative'}}>
        <Box sx={{width:'100%',height:"100px", position:'absolute',top:'-50px'}}>
        <Box className={'attach-card'} sx={{width:'60%',height:'100%',margin:'0 auto',borderRadius:'20px',padding:'10px',background:'white'}}>
            <Box component={'h2'}> Discover the world around you with just a tap to explore, book, and adventure like never before.</Box>
        </Box>
        </Box>
    </Box>
  )
}

export default AttachCard