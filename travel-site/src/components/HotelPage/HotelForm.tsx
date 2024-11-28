import { Autocomplete, Box, Button, debounce, Stack, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { fetchCityList } from "../utils/fetchFunctions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { hotelActions } from "../store/hotelState";

interface DataObj {
  city: string;
  lat: number;
  lon: number;
  address_line1: string;
}

function HotelForm() {
  const [error,setError] =useState([false,false,false])
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
    if(city?.trim()===''){
      setError(prev=>{
        const a =prev[1];
        const b=prev[2];
        return [true,a,b];
      })
      return;
    }
    else{
      setError(prev=>{
        const a =prev[1];
        const b=prev[2];
        return [false,a,b];
      })
      if(city){
        clearTimeout(DebounceTimer.current);
        DebounceTimer.current = setTimeout(async()=>{
          let cityData = await fetchCityList(city)
          console.log(cityData);
          
          setCityList(cityData);
        },500)
        
      }
    }
  }
  function handlePersonChange(event:React.ChangeEvent<HTMLInputElement>){
    const person = (event.target.value);
    console.log(person);
    
    if(person.trim()===''){
      setError(prev=>{
        const a =prev[0];
        const b=prev[1];
        return [a,b,true];
      })
      return;
    }
    else{
      setError(prev=>{
        const a =prev[0];
        const b=prev[1];
        return [a,b,false,];
      })
    }
  }
  return (
    <Box sx={{ width: "40%",maxWidth:'400px', height: "300px", background: "white",padding:'15px 2rem',borderRadius:'15px' }}>
      <Stack direction={'column'} gap={2}>
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
        <Box>
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
        </Box>
        <Button variant="contained" onClick={handleSearch}>Search</Button>
      </Stack>
      
    </Box>
  );
}

export default HotelForm;
