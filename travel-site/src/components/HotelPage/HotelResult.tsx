import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import HotelCard from "./HotelCard";
import { HotelObjType } from "./HotelTypeModel";

function HotelResult() {
  const hoteData = useSelector((state: RootState) => state.hotel.hotelData);
  const city = useSelector((state: RootState) => state.hotel.city);
  return (
    <>
      {hoteData.length === 0 ? (
        <></>
      ) : (
        <Container maxWidth="md" sx={{ py: "2rem", margin: "0 auto" }}>
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Box component={"h4"} py={3}>{hoteData.length} results found</Box>
            {/* <Box sx={{ width: 180 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Sort Hotels
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={""}
                  label="Sort Hotel"
                  onChange={(e: any) => console.log(e.target.value)}
                >
                  <MenuItem value={1}>low to high price</MenuItem>
                  <MenuItem value={2}>high to low price</MenuItem>
                </Select>
              </FormControl>
            </Box> */}
          </Stack>

          <Box component={'h1'}>Hotels in {city.name || city.address_line1}</Box>

          <Stack
            direction={"column"}
            gap={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              margin: "1.5rem 0",
            }}
          >
            {hoteData.map((hotel: HotelObjType) => (
              <HotelCard key={hotel.properties.place_id} hotel={hotel} />
            ))}
          </Stack>
        </Container>
      )}
    </>
  );
}

export default HotelResult;

/* HOTELS CARDS */
/* <Stack direction={'column'} gap={2} sx={{justifyContent:'center' , alignItems:'center',margin:'1.5rem 0'}}>
        {([1,2,3,4].map((id)=>(
            <Box key={id} component={'article'} sx={{border:'2px solid rgb(225, 231, 238)',background:'#fff',maxWidth:'700px',borderRadius:'15px'}}>
            <Stack direction={'row'}>
                <Box sx={{width:'250px',height:'240px',padding:'5px'}}>
                    <img src="https://placehold.co/400" alt="hotel placeholder" style={{width:'240px',height:'230px',objectFit:'cover'}}/>
                </Box>
                <Box sx={{padding:'1.5rem'}}>
                    <Stack direction={'column'} justifyContent={'space-between'}  sx={{width:"100%" ,minWidth:'400px',minHeight:'180px'}}>
                        <Stack direction={'column'} gap={1}>
                        <Box component={'h1'}>TAJ HOTELS</Box>
                        <Box sx={{color:'#808080'}}><i className="fa-solid fa-location-dot"></i> Mumbai,India</Box>
                        <Rating name="read-only" value={3} readOnly />
                        </Stack>
                        <Stack direction={'row'} sx={{alignItems:'center',justifyContent:'space-between'}} >
                            <Box sx={{fontSize:'1rem',fontWeight:'600'}}>Price : $ 1000</Box>
                            <Box><button className="hotel-btn">Book Room</button></Box>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
          </Box>
        )))}
      </Stack> */

/*




*/
