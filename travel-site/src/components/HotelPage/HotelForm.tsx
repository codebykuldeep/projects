import { Autocomplete, Box, Button, Stack, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { fetchCityList, fetchPlace } from "../utils/fetchFunctions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { hotelActions } from "../store/hotelState";
import { getCurrentLocation } from "../utils/util functions";

interface DataObj {
  city: string;
  lat: number;
  lon: number;
  address_line1: string;
}

function HotelForm() {
  const [selectedCity, setSelectedCity] = useState("");
  const [cityList,setCityList] =useState<DataObj[]>([])
  const DebounceTimer = useRef<any>();

  const dispatch =useDispatch<AppDispatch>()

  async function handleSearch(){
    if (selectedCity === "") return;
    const city = cityList.find((city) => {
      if (city.city && city.city.toLowerCase() === selectedCity.toLowerCase())
        return true;
      if (
        city.address_line1 &&
        city.address_line1.toLowerCase() === selectedCity.toLowerCase()
      )
        return true;
      return false;
    });
    if(city){
      dispatch(hotelActions.updateCity(city));
    }

  }

  async function handleNameChange(event:React.ChangeEvent<HTMLInputElement>){
    const city = (event.target.value);
    if(city){
      clearTimeout(DebounceTimer.current);
      DebounceTimer.current = setTimeout(async()=>{
        let cityData = await fetchCityList(city)
        
        setCityList(cityData);
      },500)
      
    }
  }

  async function handleCurrentLocation(){
    const data = await getCurrentLocation();
    let lat:number = 0;
    let lon:number =0;
    if(Array.isArray(data)){
      lat =data[0];
      lon =data[1];
    }
    
    const city = await fetchPlace(lat,lon);
    dispatch(hotelActions.updateCity(city))
    
  }
  
  return (
    <Box sx={{ width: "40%",maxWidth:'400px', height: "200px", background: "white",padding:'15px 2rem',borderRadius:'15px' }}>
      <Stack direction={'column'} sx={{justifyContent: "space-evenly",height:'100%'}} gap={2}>
        <Box>
        {/* <TextField error={error[0]} id="outlined-search" label="City" type="search" sx={{width:'100%'}} onChange={handleNameChange}/> */}
        <Autocomplete
            id="free-solo-demo"
            onChange={(event: any) => setSelectedCity(event.target.textContent)}
            options={cityList.map((option) => option.address_line1)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search by city"
                onChange={handleNameChange}
              />
            )}
          />
        </Box>
        {/* <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateRangePicker"]} >
              <DateRangePicker
                disablePast
                localeText={{ start: "Check-in", end: "Check-out" }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
        <Box sx={{width:'100%'}}>
        <TextField error={error[2]} id="outlined-search" label="Person count" type="number" sx={{width:'100%'}} onChange={handlePersonChange}/>
        </Box> */}
        <Button variant="contained" onClick={handleSearch}>Search</Button>
        <Button variant="contained" onClick={handleCurrentLocation}>Current location</Button>
      </Stack>
      
    </Box>
  );
}

export default HotelForm;
