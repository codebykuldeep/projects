import { Box } from '@mui/material'
import Img1 from '../../assets/imgPanel/img-1.jpg'
import Img2 from  '../../assets/imgPanel/img-2.jpg'
import { useState } from 'react';

export default function ImgPanel() {
  const imgArray:string[] =[Img1,Img2];
  const [index,setIndex] = useState<number>(0)

  function handleImage():void{
    setIndex(prev=>((prev+1)%imgArray.length))
  }

  return (
    <Box sx={{width:'60%',height:'100%'}} onClick={handleImage}>
      <img style={{width:'100%',height:'100%',objectFit:'cover'}} src={imgArray[index]} alt="" />
    </Box>
  )
}
