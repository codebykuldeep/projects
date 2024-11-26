import { Box, Container } from "@mui/material";
import PlaneImg from '../../assets/travel-img.jpg'




function Featured() {

  // const lists:object[] =[
  //   {
  //     id:1,
  //     h1:"Stunning Destinations",
  //     p:""
  //   }
  // ]

  const cssProps ={cursor:'pointer',display:'flex',flexDirection:'column',gap:'30px',justifyContent:'space-between',borderLeft:"2px solid black",pl:'1rem'}


  return (
    <Container maxWidth="xl" sx={{margin:'2rem 0 0 0',display:"flex" ,justifyContent:"space-evenly",py:'3rem',fontFamily:`"Libre Baskerville",'serif'`}}>
      <Box sx={{width:'600px',height:'350px',objectFit:"contain"}}>
        <img style={{width:'600px',height:'350px',objectFit:"cover"}} src={PlaneImg} alt="Travel in plane" />
      </Box>
      <Box  sx={{display:'flex',height:'350px',flexDirection:'column',gap:'30px',justifyContent:'space-between'}}>
        <Box sx={cssProps}>
          <h1 onClick={(e)=>console.log(e)}>Stunning Destinations</h1>
          <p>Plan your next adventure with ease</p>
        </Box>
        <Box sx={cssProps}>
          <h1>Great Accommodation Options</h1>
          <p>Find the best deals on accommodations</p>
        </Box>
        <Box sx={cssProps}>
          <h1>Discover Exciting Places</h1>
          <p>Explore popular landmarks and attractions</p>
        </Box>
      </Box>
    </Container>
  );
}

export default Featured;
