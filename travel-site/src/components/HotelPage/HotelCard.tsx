import { Box, Rating, Stack } from '@mui/material'
import React from 'react'
import { HotelObjType } from './HotelTypeModel'

interface HotelCardProps{
    hotel:HotelObjType;
}

function HotelCard({hotel}:HotelCardProps) {
    const googleSearch = `https://www.google.com/search?q=`;
  return (
    <Box  component={'article'} sx={{border:'2px solid rgb(225, 231, 238)',background:'#fff',maxWidth:'700px',borderRadius:'15px'}}>
            <Stack direction={'row'}>
                <Box sx={{width:'250px',height:'240px',padding:'5px'}}>
                    <img src="https://placehold.co/400" alt="hotel placeholder" style={{width:'240px',height:'230px',objectFit:'cover'}}/>
                </Box>
                <Box sx={{padding:'1.5rem'}}>
                    <Stack direction={'column'} justifyContent={'space-between'}  sx={{width:"100%" ,minWidth:'400px',minHeight:'180px'}}>
                        <Stack direction={'column'} gap={1}>
                        <Box component={'h1'}>{hotel.properties.name || hotel.properties.address_line1}</Box>
                        <Box sx={{color:'#808080'}}><i className="fa-solid fa-location-dot"></i> {hotel.properties.address_line2}</Box>
                        <Rating name="read-only" value={Math.random()*2 +3} readOnly />
                        </Stack>
                        <Stack direction={'row'} sx={{alignItems:'center',justifyContent:'space-between'}} >
                            <Box sx={{fontSize:'1rem',fontWeight:'600'}}>Parking Space,Good place</Box>
                            <Box>
                                <a href={hotel?.properties?.website || `${googleSearch}${hotel.properties.formatted}` } rel='noreferrer' target='_blank'>
                                    <button className="hotel-btn">Book Room</button>
                                    </a>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
          </Box>
  )
}

export default HotelCard