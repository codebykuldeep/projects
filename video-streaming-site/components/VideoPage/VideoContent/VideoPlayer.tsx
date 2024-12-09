import { Box } from '@mui/material'
import classes from './video-content.module.css'

export default function VideoPlayer() {
  return (
    <Box className={classes.player}>
        <video  controls>
        <source src="video/default.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
    </Box>
  )
}
