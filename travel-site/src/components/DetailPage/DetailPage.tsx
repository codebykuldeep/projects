import { Box, CircularProgress, Stack } from '@mui/material'
import DetailHeader from './DetailHeader'
import DetailImage from './DetailImage'
import './DetailPage.css'
import DetailInfo from './DetailInfo'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchImages, fetchPlaceById } from '../utils/fetchFunctions'
import { useEffect, useState } from 'react'
import { imgDataType, placeType } from './DetailModelType'
// interface paramsType{
//   id:string;
// }



function DetailPage() {
  const {id}:any =useParams();
  const navigate =useNavigate();
  const [loading,setLoading] = useState<boolean>(true)
  const [place,setPlace] = useState<placeType>({})
  const [imageData,setImageData] =useState<imgDataType[]>([]);
  
  useEffect(()=>{
    async function fetchData(){
      try{
        const place =await  fetchPlaceById(id);
        console.log('here');
        
        const imgData = await fetchImages(place?.name_international?.en,place?.address_line1);
        console.log('here 2');
        
        setPlace(place);
        setImageData(imgData);
        setLoading(false);
      }
      catch(e){
        console.log('error',e);
        
        navigate('/error');
      }
    }
    fetchData();

  },[id,navigate])

  if(loading){
    return(
      <Box sx={{width:'100%',height:'100vh',display:'flex',alignItems:"center",justifyContent:'center'}}>
        <CircularProgress size={140} />
      </Box>
    )
  }


  return (
    <div>
      <DetailHeader place={place} imageData={imageData}/>
        <Stack direction={'row'} sx={{justifyContent:'center',alignItems:'flex-start' ,margin:'2rem 0',flexWrap:'wrap'}}>
          <DetailInfo place={place}/>
          <DetailImage imageData={imageData}/>
        </Stack>
    </div>
  )
}


export default DetailPage

