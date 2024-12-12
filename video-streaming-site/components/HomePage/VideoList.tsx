import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import dummy from "@/public/image/default.jpg";
import classes from "./trending-section.module.css";
import { VideoCreatorType, VideoType } from "@/helper/commonTypes";
import { formatDate } from "@/helper/helperFns";
import Link from "next/link";
interface VideoListProps{
    videos:VideoCreatorType[];
}

export default function VideoList({videos}:VideoListProps) {
  return (
    <>
    {videos.map((video)=>(
          <Grid key={video.id}>
          <Link href={`/video/${video.id}`}>
          <Box className={classes.card}>
            <Box className={classes.image}>
              <Image src={video.image_url} width={400} height={400} alt="dummy" />
            </Box>
            <Box className={classes.cardText}>
              <Box component={"h3"}>{video.title}</Box>
              <Box component={"p"}>
                <span>{video.name}</span>
                <span>{formatDate(video.created_at)}</span>
              </Box>
            </Box>
          </Box>
          </Link>
        </Grid>
        ))}
    </>
  )
}
