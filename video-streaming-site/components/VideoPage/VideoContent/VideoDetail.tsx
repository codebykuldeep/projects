import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material";
import classes from './video-content.module.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

import Image from "next/image";

export default function VideoDetail() {
  return (
    <Box component={'section'} className={classes.detail}>
    <h2>Video name</h2>
    <Box className={classes.profile}>
        <Box className={classes.userImg}><Image src={'/image/user.png'} height={50} width={100} alt="user profile"/></Box>
        <Box className={classes.userProfile}>
          <div>Creater name</div>
          <div><span><ThumbUpOutlinedIcon/></span> <span><ThumbDownAltOutlinedIcon/></span></div>
        </Box>
    </Box>
    <Box className={classes.dropdown}>  
    <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="video-detail"
        >
          <span>8600 views</span>
          <span>Dec 2 ,2024</span>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptate voluptas, explicabo hic eos ad, et pariatur voluptates veniam dolorum omnis quisquam, voluptatum quidem delectus. Eius, voluptas fugiat? Ratione sint id non aliquid mollitia impedit voluptas? Deleniti, atque, totam sequi quidem corporis accusamus laborum doloribus magnam ducimus temporibus repudiandae qui!
        </AccordionDetails>
      </Accordion>

    </Box>
    </Box>
  )
}
