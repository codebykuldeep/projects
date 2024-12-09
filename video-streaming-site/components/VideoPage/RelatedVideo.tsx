import { Box } from '@mui/material'
import classes from './related-video.module.css'
import Image from 'next/image'

export default function RelatedVideo() {
  return (
    <Box className={classes.related}>
        <Box className={classes.container}>
            {(new Array(10).fill(0).map((_,index)=>(
                <Box key={index} className={classes.card}>
                <Box className={classes.image}>
                    <Image src={'/image/default.jpg'} alt='video thumbnail' width={168} height={94}></Image>
                </Box>
                <Box className={classes.text}>
                    <Box component={'p'}> Lorem ipsum dolor sit amet.</Box>
                    <Box component={'p'}> creator name</Box>
                    <Box component={'p'}> <span>8.1K</span></Box>
                </Box>
            </Box>
            )))}
        </Box>
    </Box>
  )
}
