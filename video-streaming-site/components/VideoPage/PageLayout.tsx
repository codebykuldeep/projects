import { Box, Container } from "@mui/material"
import classes from './video-page.module.css'
import VideoContent from "./VideoContent"
import RelatedVideo from "./RelatedVideo"
function PageLayout() {
  return (
    <Container maxWidth='xl' className={classes.layout}>
        <Box className={classes.player}>
            <VideoContent/>
        </Box>
        <Box className={classes.related}>
            <RelatedVideo/>
        </Box>
    </Container>
  )
}

export default PageLayout