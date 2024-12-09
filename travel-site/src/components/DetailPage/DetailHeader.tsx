import { Box } from '@mui/material'
//import demoBg from '../../assets/detail/demo-bg.jpg'
import { imgDataType, placeType } from './DetailModelType'
interface DetailHeaderProps{
  place:placeType;
  imageData:imgDataType[]
}

function DetailHeader({place,imageData}:DetailHeaderProps) {
  return (
    <div className='detail-header' style={{backgroundImage:`url(${imageData[0].webformatURL})`}}>
        <div className='detail-blur'></div>
        <Box className='detail-title'>
            <Box component={'h1'}>{place?.name_international?.en || place.address_line1 }</Box>
        </Box>
    </div>
  )
}

export default DetailHeader