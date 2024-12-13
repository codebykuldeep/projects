import { Box, Container } from "@mui/material";
import classes from "./trending-section.module.css";
import Image from "next/image";

import Grid from "@mui/material/Grid2";
import VideoList from "./VideoList";
import { getMostWatchedVideos, getVideosWithCreators } from "@/lib/video";
import { Suspense } from "react";
import { VideoCreatorType, VideoType } from "@/helper/commonTypes";

export default async function  TrendingSection() {
  
  const data = getVideosWithCreators();
  
  
  
  return (
    <Container maxWidth="xl" className={classes.trending}>
      <Box component={"h2"}>Trending videos</Box>
      <Grid container className={classes.container} direction={'row'} spacing={2}>
        <Suspense fallback={<p>Loading ...</p>}>
            <VideoList videos={data as VideoCreatorType[]} />
        </Suspense>
      </Grid>
    </Container>
  );
}
