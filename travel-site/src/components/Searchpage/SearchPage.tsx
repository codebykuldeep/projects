import React from 'react'
import SearchSection from './SearchSection';
import './SearchPage.css'
import SearchBox from './SearchBox';
import FamousPlaces from './FamousPlaces';
import Results from './Results';

function SearchPage() {
  return (
    <div className='search-page'>
      <SearchSection/>
      <SearchBox/>
      <FamousPlaces/>
      <Results/>
    </div>
  )
}

export default SearchPage