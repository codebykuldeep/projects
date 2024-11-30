import React, { useEffect } from 'react'
import HotelPage from './HotelPage'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { hotelActions } from '../store/hotelState'

function HotelLayout() {
  const dispatch = useDispatch<AppDispatch>()
    useEffect(()=>{
        return ()=>{
            console.log('hotel page demounted');
            dispatch(hotelActions.removeCity());
        }
    },[dispatch])
  return (
    <><HotelPage/></>
  )
}

export default HotelLayout