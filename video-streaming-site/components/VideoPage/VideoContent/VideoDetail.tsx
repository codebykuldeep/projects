import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material";
import classes from './video-content.module.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import Image from "next/image";
import { VideoCreatorType } from "@/helper/commonTypes";
import { formatDate } from "@/helper/helperFns";
import LikeSection from "./LikeSection";
import { getLikesCount } from "@/lib/likes";

interface VideoDetailProps{
  video:VideoCreatorType;
}

export default async function VideoDetail({video}:VideoDetailProps) {
  const [like,dislike] =getLikesCount(video.id);
  console.log(video);
  
  return (
    <Box component={'section'} className={classes.detail}>
    <h2>{video.title}</h2>
    <Box className={classes.profile}>
        <Box className={classes.userImg}><Image src={'/image/user.png'} height={50} width={100} alt="user profile"/></Box>
        <Box className={classes.userProfile}>
          <div>{video.name}</div>
          <LikeSection video={video} like={like} dislike={dislike}/>
        </Box>
    </Box>
    <Box className={classes.dropdown}>  
    <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="video-detail"
        >
          <div className={classes.meta}>
          <span>{video.count} views</span>|
          <span>{formatDate(video.created_at)}</span>|
          <span>{video.category.toUpperCase()}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {video.description}
        </AccordionDetails>
      </Accordion>

    </Box>
    </Box>
  )
}
