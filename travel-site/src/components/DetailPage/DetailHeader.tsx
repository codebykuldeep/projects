import { Box } from '@mui/material'
import demoBg from '../../assets/detail/demo-bg.jpg'

function DetailHeader() {
  return (
    <div className='detail-header' style={{backgroundImage:`url(${demoBg})`}}>
        <div className='detail-blur'></div>
        <Box className='detail-title'>
            <Box component={'h1'}>TAJ MAHAL</Box>
        </Box>
    </div>
  )
}

export default DetailHeader