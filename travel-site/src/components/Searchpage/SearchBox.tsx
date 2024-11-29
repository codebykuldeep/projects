import { Autocomplete, Box, Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { cityActions } from "../store/cityState";
import { getCurrentLocation } from "../utils/util functions";
import { fetchPlace } from "../utils/fetchFunctions";

interface DataObj {
  city: string;
  lat: number;
  lon: number;
  address_line1: string;
}

function SearchBox() {
  const dispatch = useDispatch<AppDispatch>();

  const [cityData, setCityData] = useState<DataObj[]>([]);
  const [selectedCity, setSelectedCity] = useState("");
  const DebounceTimer = useRef<any>();

  function handleCityName(event: React.ChangeEvent<HTMLInputElement>) {
    clearTimeout(DebounceTimer.current);
    let city = event.target.value;
    
    DebounceTimer.current = setTimeout(async function fetchData() {
      if (city.trim() === "") return;
      const { data } = await axios.get(
        "https://api.geoapify.com/v1/geocode/autocomplete",
        {
          params: {
            text: city.toLowerCase(),
            lang: "en",
            limit: 10,
            type: "city",
            format: "json",
            apiKey: "83c6152e34184ca58521827d76445a1b",
          },
        }
      );
      
      setCityData(data.results);
    }, 500);
  }

  function handleSearch() {
    if (selectedCity === "") return;
    const city = cityData.find((city) => {
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
      dispatch(cityActions.updateCity(city))
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
    dispatch(cityActions.updateCity(city));
    
  }

  

  return (
    <Box sx={{ width: "100%", height: "200px", position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          height: "120px",
          position: "absolute",
          top: "-40px",
        }}
      >
        <Box
          className={"search-form"}
          sx={{
            width: "60%",
            height: "100%",
            margin: "0 auto",
            borderRadius: "20px",
            padding: "2rem",
            background: "white",
          }}
        >
          <Autocomplete
            id="free-solo-demo"
            onChange={(event: any) => setSelectedCity(event.target.textContent)}
            options={cityData.map((option) => option.address_line1)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search by city"
                onChange={handleCityName}
              />
            )}
          />
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              margin: "1rem 0",
            }}
          >
            <Button variant='contained' onClick={handleSearch}>
              SEARCH
            </Button>
            <Button variant='contained' onClick={handleCurrentLocation}>
              Current Location
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default SearchBox;
