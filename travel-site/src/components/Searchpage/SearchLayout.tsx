import React, { useEffect } from 'react'
import SearchPage from './SearchPage'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { cityActions } from '../store/cityState'

function SearchLayout() {
    const dispatch =useDispatch<AppDispatch>()
    useEffect(()=>{
        return ()=>{
            dispatch(cityActions.removeCity());
        }
    },[dispatch])
  return (
    <SearchPage/>
  )
}

export default SearchLayout