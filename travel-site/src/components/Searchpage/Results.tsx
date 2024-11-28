import { Box, CircularProgress, Container } from "@mui/material";
import ResultCard from "./ResultCard";
import Grid from "@mui/material/Grid2";
import { useSelector } from "react-redux";
import { RootState } from "../store";
// import { PlaceType } from "./InterfaceModel";



function Results() {
  const placesData = useSelector((state:RootState)=>state.city.placesData)
  const city = useSelector((state:RootState)=>state.city.city)
  
  return (
    <>
    {city.place_id && <Container sx={{ width: "90%" }}>
      <Box component={"section"}>
        <Box component={"h1"} sx={{ fontSize: "2.4rem",margin:'1rem 0 2rem 0' }}>
          Famous places near {city.address_line1}
        </Box>
        {/* <Stack direction={'row'} sx={{marginTop:'2rem'}}>
            <Box sx={{width:'200px',height:'200px'}}>
              <img src={'https://placehold.co/200'} className='result-img' alt="Placeholder img" />
            </Box>
            <Box>Name</Box>
          </Stack> */}
        <Grid
          container
          spacing={2}
          direction="row"
          maxWidth={'900px'}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            margin:'0 auto'
          }}
        >
          { placesData.length === 0 ? (<Box py={'2rem'}><CircularProgress size={120} /></Box>):(
            placesData.map((place:any) => (
              <Grid key={place.properties.place_id} size={12 / 2}>
                <ResultCard place={place} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Container>}
    </>
  );
}

export default Results;
