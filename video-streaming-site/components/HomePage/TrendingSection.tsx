import { Box, Container } from "@mui/material";
import classes from "./trending-section.module.css";
import Image from "next/image";

import Grid from "@mui/material/Grid2";
import VideoList from "./VideoList";
import { getVideosWithCreators } from "@/lib/video";
import { Suspense } from "react";
import { VideoCreatorType, VideoType } from "@/helper/commonTypes";
import { waitFunction } from "@/helper/helperFns";
import TrendingVideo from "../Dummy/TrendingVideo";

async function VideoInsert(){
  const data = getVideosWithCreators();
  await waitFunction(2000);

  return <VideoList videos={data as VideoCreatorType[]} />;
}

export default function  TrendingSection() {
    
  
  return (
    <Container maxWidth="xl" className={classes.trending}>
      <Box component={"h2"}>Trending videos</Box>
      <Grid container className={classes.container} direction={'row'} spacing={2}>
        <Suspense fallback={<TrendingVideo/>}>
            <VideoInsert/>
        </Suspense>
      </Grid>
    </Container>
  );
}
