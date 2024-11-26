import { Stack } from '@mui/material'
import DetailHeader from './DetailHeader'
import DetailImage from './DetailImage'
import './DetailPage.css'
import DetailInfo from './DetailInfo'

function DetailPage() {
  return (
    <div>
      <DetailHeader/>
      <Stack direction={'row'} sx={{justifyContent:'center',alignItems:'flex-start' ,margin:'2rem 0',flexWrap:'wrap'}}>
        <DetailInfo/>
        <DetailImage/>
      </Stack>
    </div>
  )
}

export default DetailPage