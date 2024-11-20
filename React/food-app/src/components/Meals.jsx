import React, { useEffect, useState } from 'react'
import MealItem from './MealItem';
import useHTTP from './Hooks/useHTTP';
import Error from './Error';

const requestConfig = {};

function Meals() {
  // const [loadMeals,setLoadMeals] = useState([]);
  
  const {
    data:loadMeals,
    isLoading,
    error
  } = useHTTP('http://localhost:3000/meals',requestConfig,[])


  // useEffect(()=>{
  //   async function fetchMeals() {
  //     const response = await fetch('http://localhost:3000/meals');
      

  //     if(!response.ok){
  //         //.....
  //     }

  //     const data =await response.json();

  //     setLoadMeals(data);
  // }
  // fetchMeals();
  // },[])

  if(isLoading){
    return <p className='center'>Fetching Meals....</p>
  }

  if(error){
    return <Error title={'Failed to fetch meals'} message={error}/>
  }

    
  return (
    <ul id='meals'>
      {loadMeals.map((meal)=>(
        <MealItem key={meal.id} meal={meal}/>
      ))}
    </ul>
  )
}

export default Meals