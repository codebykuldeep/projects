import { Box, Container } from "@mui/material";
import classes from "./trending-section.module.css";
import Image from "next/image";
import dummy from "@/public/image/default.jpg";
import Grid from "@mui/material/Grid2";

export default function TrendingSection() {
  return (
    <Container maxWidth="xl" className={classes.trending}>
      <Box component={"h2"}>Trending videos</Box>
      <Grid container className={classes.container} direction={'row'} spacing={2}>
        {[1,2,3,4].map((val)=>(
          <Grid key={val}>
          <Box className={classes.card}>
            <Box className={classes.image}>
              <Image src={dummy} alt="dummy" />
            </Box>
            <Box className={classes.cardText}>
              <Box component={"h3"}>Video name</Box>
              <Box component={"p"}>
                <span>creator name</span>
                <span>Date</span>
              </Box>
            </Box>
          </Box>
        </Grid>
        ))}
      </Grid>
    </Container>
  );
}
