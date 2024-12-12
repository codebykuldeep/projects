import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import classes from './user-video.module.css';
import Image from "next/image";
import CircleIcon from '@mui/icons-material/Circle';
import { VideoType } from "@/helper/commonTypes";


interface UserVideoProps{
  videos:VideoType[];
}

export default function UserVideo({videos}:UserVideoProps) {

  
  
  if(videos.length === 0){
    return (
      <p>You have not uploaded any videos...</p>
    )
  }
  return (
    <Grid container className={classes.container} direction={'row'} spacing={2}>
        {(videos).map((_,val)=>(
      <Grid key={val}>
      <Box className={classes.card}>
        <Box className={classes.image}>
          <Image src={'/image/default.jpg'} alt="dummy"  width={1000} height={1000}/>
        </Box>
        <Box className={classes.cardText}>
          <Box component={"h3"}>Video name</Box>
          <Box component={'p'}>
            <span>8.1K views</span>
            <span><CircleIcon /></span> <span>10 days ago</span>
        </Box>
        </Box>
      </Box>
    </Grid>
    ))}
      </Grid>
  )
}
