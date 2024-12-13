import { Box } from '@mui/material'
import classes from './video-content.module.css'
import { VideoCreatorType } from '@/helper/commonTypes'
interface VideoPlayerProps{
  video:VideoCreatorType;
}

export default function VideoPlayer({video}:VideoPlayerProps) {
  return (
    <Box className={classes.player}>
        <video  controls>
        <source src="/video/default.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
    </Box>
  )
}
