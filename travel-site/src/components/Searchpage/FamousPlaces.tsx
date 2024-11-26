import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface PlacesObj {
  id: number;
  name: string;
  imageURL: string;
}
const famousPlacesArray: PlacesObj[] = [
  {
    id: 1,
    name: "Lakshadweep",
    imageURL:
      "https://www.easemytrip.com//images/desk-img/hol-icon/lakshadweep.svg",
  },
  {
    id: 2,
    name: "Andaman",
    imageURL:
      "https://www.easemytrip.com//images/desk-img/hol-icon/andaman-new.png",
  },
  {
    id: 3,
    name: "Kashmir",
    imageURL:
      "https://www.easemytrip.com//images/desk-img/hol-icon/kashmir.svg",
  },
  {
    id: 4,
    name: "Jaipur",
    imageURL: "https://www.easemytrip.com//images/desk-img/hol-icon/jaipur.svg",
  },
  {
    id: 5,
    name: "Bengaluru",
    imageURL:
      "https://www.easemytrip.com//images/desk-img/hol-icon/bangalore.svg",
  },
  {
    id: 6,
    name: "Paris",
    imageURL: "https://www.easemytrip.com//images/desk-img/hol-icon/paris.svg",
  },
  {
    id: 7,
    name: "Leh",
    imageURL: "https://www.easemytrip.com//images/desk-img/hol-icon/leh.svg",
  },
  {
    id: 8,
    name: "Bali",
    imageURL:
      "https://www.easemytrip.com//images/desk-img/hol-icon/bali-indonesia.svg",
  },
  {
    id: 9,
    name: "Dubai",
    imageURL: "https://www.easemytrip.com//images/desk-img/hol-icon/dubai.svg",
  },
  {
    id: 10,
    name: "Kerala",
    imageURL: "https://www.easemytrip.com//images/desk-img/hol-icon/kerala.svg",
  },
];

function FamousPlaces() {
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


          {famousPlacesArray.map(({ id, name, imageURL }: PlacesObj) => (
            <Grid size={12/5} key={id}>
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
