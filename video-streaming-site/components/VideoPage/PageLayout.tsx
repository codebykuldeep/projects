import { Box, Container } from "@mui/material"
import classes from './video-page.module.css'
import VideoContent from "./VideoContent"
import RelatedVideo from "./RelatedVideo"
import VideoIncreaseCount from "./VideoIncreaseCount"
function PageLayout({ params,}: {params: Promise<{ id: string }>;}) {
  return (
    <>
    <Container maxWidth='xl' className={classes.layout}>
        <Box className={classes.player}>
            <VideoContent params={params}/>
        </Box>
        <Box className={classes.related}>
            <RelatedVideo params={params}/>
        </Box>
    </Container>
    <VideoIncreaseCount/>
    </>
  )
}

export default PageLayout