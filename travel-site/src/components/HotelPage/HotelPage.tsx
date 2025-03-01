import React, { useEffect } from 'react'
import HotelSearch from './HotelSearch'
import './HotelPage.css'
import HotelResult from './HotelResult'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { hotelActions } from '../store/hotelState'

function HotelPage() {
  const cityData =useSelector((state:RootState)=>state.hotel.city);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=>{
  
    async function fetchPlacesData(placeid:string) {
      const {data} =await axios.get('https://api.geoapify.com/v2/places',{
        params:{
          categories:'accommodation.hotel',
          filter:`place:${placeid}`,
          limit:20,
          apiKey:process.env.REACT_APP_API_KEY
        }
      })
     
      dispatch(hotelActions.updatePlaces(data.features));
    }
    if(cityData.place_id){
      fetchPlacesData(cityData.place_id)
    }
    
  },[cityData,dispatch])
  return (
    <div>
        <HotelSearch/>
        <Box sx={{background:'#eee'}}>
        <HotelResult/>
        </Box>
    </div>
  )
}

export default HotelPage