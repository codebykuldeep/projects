import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { fetchPlace } from "../utils/fetchFunctions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { cityActions } from "../store/cityState";

interface PlacesObj {
  id: number;
  name: string;
  imageURL: string;
  lat:number;
  lon:number;
}


function FamousPlaces() {

  const dispatch =useDispatch<AppDispatch>();

  async function handleClick(name:string,lat:number,lon:number){
    const city = await fetchPlace(lat,lon);
    if(city.name || city.address_line1){
      city.name =name;
      city.address_line1=name;
    }
    console.log('city',city);
    
    dispatch(cityActions.updateCity(city));
  }
  return (
    <Box component={"section"}>
      <Box
        component={"h1"}
        sx={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "700" ,paddingBottom:'3rem'}}
      >
        Famous Tourist Attraction
      </Box>
      <Box sx={{ flexGrow: 1 ,marginBottom:'5rem' }}>
        <Grid container spacing={2} sx={{
            width:'100%',
          justifyContent: "center",
          alignItems: "center",
        }}>


          {famousPlacesArray.map(({ id, name, imageURL,lat,lon }: PlacesObj) => (
            <Grid size={12/5} key={id} sx={{cursor:'pointer'}} onClick={()=>{handleClick(name,lat,lon)}}>
              <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:'10px'}}>
                <Box sx={{width:'100px',height:"100px"}}>
                    <img src={imageURL} style={{width:'100px',height:"100px"}} alt="" />
                </Box>
                <Box component={'h4'}>{name}</Box>
              </Box>
            </Grid>
          ))}


        </Grid>
      </Box>
    </Box>
  );
}

export default FamousPlaces;



const famousPlacesArray: PlacesObj[] = [
  {
    id: 1,
    name: "Lakshadweep",
    imageURL:
      "https://www.easemytrip.com//images/desk-img/hol-icon/lakshadweep.svg",
    lat:10.3337313,
    lon:72.92053859204833,
  },
  {
    id: 2,
    name: "Andaman",
    imageURL:
      "https://www.easemytrip.com//images/desk-img/hol-icon/andaman-new.png",
    lat:12.61123865,
    lon:92.83165406414926,
  },
  {
    id: 3,
    name: "Kashmir",
    imageURL:
      "https://www.easemytrip.com//images/desk-img/hol-icon/kashmir.svg",
      lat:33.6649297,
    lon:75.1629584,
  },
  {
    id: 4,
    name: "Jaipur",
    imageURL: "https://www.easemytrip.com//images/desk-img/hol-icon/jaipur.svg",
    lat:26.86513745,
    lon:75.7119951566616,
  },
  {
    id: 5,
    name: "Bengaluru",
    imageURL:
      "https://www.easemytrip.com//images/desk-img/hol-icon/bangalore.svg",
      lat:12.94615545,
    lon:77.55038444771247,
  },
  {
    id: 6,
    name: "Paris",
    imageURL: "https://www.easemytrip.com//images/desk-img/hol-icon/paris.svg",
    lat:48.8588897,
    lon:2.3200410217200766,
  },
  {
    id: 7,
    name: "Leh",
    imageURL: "https://www.easemytrip.com//images/desk-img/hol-icon/leh.svg",
    lat:33.9456407,
    lon:77.6568576,
  },
  {
    id: 8,
    name: "Bali",
    imageURL:
      "https://www.easemytrip.com//images/desk-img/hol-icon/bali-indonesia.svg",
      lat:-8.6524973,
    lon:115.2191175,
  },
  {
    id: 9,
    name: "Dubai",
    imageURL: "https://www.easemytrip.com//images/desk-img/hol-icon/dubai.svg",
    lat:25.2653471,
    lon:55.2924914,
  },
  {
    id: 10,
    name: "Kerala",
    imageURL: "https://www.easemytrip.com//images/desk-img/hol-icon/kerala.svg",
    lat:10.3528744,
    lon:76.5120396,
  },
];
