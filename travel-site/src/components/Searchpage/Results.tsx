import { Box, Container, Stack } from '@mui/material'
import React from 'react'

function Results() {
  return (
    <Container sx={{width:'90%'}}>
      <Box component={'section'}>
          <Box component={'h1'} sx={{fontSize:'2.4rem'}}>Famous places near Delhi</Box>
          <Stack direction={'row'} sx={{marginTop:'2rem'}}>
            <Box sx={{width:'200px',height:'200px'}}>
              <img src={'https://placehold.co/200'} className='result-img' alt="Placeholder img" />
            </Box>
            <Box>Name</Box>
          </Stack>
      </Box>
    </Container>
  )
}

export default Results