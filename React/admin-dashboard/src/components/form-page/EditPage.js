import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../util/HttpFunctions';
import { fillFormStateWithData } from '../../util/validation';
import FormPage from './FormPage';

function EditPage() {
  const {id} = useParams();
  const [fetch,setFetch] = useState(true);
  const {data,isError,isLoading} = useQuery({
    queryKey:['product',id],
    queryFn:()=>fetchProduct(id),
    enabled:fetch,
  })
  useEffect(()=>{
    if(data){
      setFetch(false);
    }
  },[data])



  if(isLoading){
    return (
      <div className="loader-box">
            <div className="loader"></div>
      </div>
    )
  }
  if(isError){
    return <p>Error...</p>
  }
  
  
  return (
    <FormPage editMode={true} prevState={fillFormStateWithData(data)} id={id}/>
  )
}

export default EditPage

