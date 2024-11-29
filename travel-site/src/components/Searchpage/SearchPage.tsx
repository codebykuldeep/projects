import SearchSection from './SearchSection';
import './SearchPage.css'
import SearchBox from './SearchBox';
import FamousPlaces from './FamousPlaces';
import Results from './Results';
import { useSelector,  } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cityActions } from '../store/cityState';
import axios from 'axios';

function SearchPage() {
  const cityData = useSelector((state:RootState)=>state.city.city)
  const dispatch = useDispatch<AppDispatch>();


  useEffect(()=>{
    
    async function fetchPlacesData(placeid:string) {
      const {data} =await axios.get('https://api.geoapify.com/v2/places',{
        params:{
          categories:'tourism',
          filter:`place:${placeid}`,
          limit:20,
          apiKey:'83c6152e34184ca58521827d76445a1b'
        }
      })
      
      dispatch(cityActions.updatePlaces(data.features));
    }
    if(cityData.place_id){
      fetchPlacesData(cityData.place_id)
    }


    // return ()=>{
    //   console.log('cleanup called');
      
    //   dispatch(cityActions.removeCity());
    // }
    
  },[cityData])
  
  return (
    <div className='search-page'>
      <SearchSection/>
      <SearchBox />
      <FamousPlaces/>
      <Results />
    </div>
  )
}

export default SearchPage