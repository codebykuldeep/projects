import { Box, Stack } from '@mui/material'
import { placeType } from './DetailModelType'

interface DetailInfoProps{
  place:placeType
}

function DetailInfo({place}:DetailInfoProps) {
  const css ={display:'flex',alignItems:'center',flexWrap:'wrap'};
  let DetailsJSX:JSX.Element[] = [];
  for(let [key,val] of Object.entries(place)){
    if(typeof val === 'string' && key !== 'place_id'){
      let element = <Box key={key} sx={css} component={'h2'}><p>{key.split('_').join(' ')} :</p>   <span>{val}</span></Box>
      DetailsJSX.push(element);
    }
  }
  
  return (
    <>
    <Stack sx={{width:'50%',minWidth:'400px',maxWidth:'500px'}} gap={2}>
        <Box component={'h2'}><i className="fa-solid fa-map-pin"></i>   <span>{place.formatted}</span></Box>
        <Box sx={css} component={'h2'}><p>City : </p>   <span>{place.city}</span></Box>
        {
          DetailsJSX.map((item)=>item)
        }
    </Stack>
    </>
  )
}

export default DetailInfo