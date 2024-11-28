import React from 'react'
import HotelMap from './HotelMap'
import HotelForm from './HotelForm'
import { Box, Stack } from '@mui/material'

function HotelSearch() {
  return (
    <div className='search-section'>
        <Box component={'h1'} className='hotel-header'>Find and Book Hotels and Homestays </Box>
       <Stack direction='row' sx={{alignItems:'flex-start',justifyContent:"center",gap:'20px'}}>
        <HotelForm/>
        <HotelMap/>
       </Stack>
    </div>
  )
}

export default HotelSearch