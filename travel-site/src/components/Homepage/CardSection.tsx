import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import card1 from '../../assets/homepage/card/card-1.jpg'
import card2 from '../../assets/homepage/card/card-2.jpg'
import card3 from '../../assets/homepage/card/card-3.jpg'
interface CardObj{
    id:number;
    heading:string;
    details:string;
    image:string;
}
function CardSection() {


   const cardData:CardObj[]=[
    {
        id:1,
        heading:'Explore Iconic Landmarks',
        details:'Uncover hidden gems and must-see landmarks just around the corner',
        image:card1
    },
    {
        id:2,
        heading:'Interactive Map Experience',
        details:'Navigate your journey with an intuitive, interactive map that brings the world to your fingertips',
        image:card2
    },
    {
        id:3,
        heading:'Seamless Hotel Booking',
        details:'Find and book your perfect stay with a few taps, right from the map.',
        image:card3
    },
   ]
  return (
    <Box sx={{ width: "100%", height: "300px", pt: 10,paddingBottom:'600px'}}>
      <Grid
        container
        direction="row"
        sx={{
            width:'100%',
          justifyContent: "center",
          alignItems: "stretch",
          marginBottom:'30px'
        }}
        spacing={6}
      >
        
        {
            cardData.map(({id,heading,details,image}:CardObj)=>(
                <Grid key={id} width={"300px"} height={"auto"}>
            <Box sx={{ border:'2px solid rgb(225, 231, 238)' ,borderRadius:'10px', height: "100%" }}>
                <Box>
                    <img src={image} style={{width:'280px',borderRadius:'10px',padding:'5px',objectFit:'cover',textAlign:'center'}} alt="card img"></img>
                    <Box sx={{padding:'1rem'}}>
                        <Box component={'h1'} sx={{textAlign:'center'}}>{heading}</Box>
                        <Box component={'p'} sx={{textAlign:'center',paddingTop:'20px'}}>{details}</Box>
                    </Box>
                </Box>
                </Box>
            </Grid>
            ))
        }
        
      </Grid>
    </Box>
  );
}

export default CardSection;
/*

<Box sx={{width:'100%',height:'auto',position:'relative'}}>
        <Box sx={{width:'100%',height:"200px", position:'absolute',top:'-50px'}}>
        <Box sx={{width:'60%',height:'100%',margin:'0 auto',borderRadius:'20px',padding:'2rem',background:'white'}}>
            <Box>Hello 1</Box>
            <Box>Hello 2</Box>
            <Box>Hello 3</Box>
        </Box>
        </Box>
    </Box>



*/
