import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { cityActions } from "../store/cityState";

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
      console.log(data.results);
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
    console.log(city);
    if(city){
      dispatch(cityActions.updateCity(city))
    }
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
            <button className="search-btn" onClick={handleSearch}>
              SEARCH
            </button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default SearchBox;
