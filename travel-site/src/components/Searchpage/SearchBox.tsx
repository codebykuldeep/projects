import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const top100Films: { title: string }[] = [];

function SearchBox() {
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
            freeSolo
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField {...params} label="Search by city" />
            )}
          />
          <Stack
            direction="row"
            spacing={2}
            sx={{
                justifyContent: "center",
                alignItems: "center",
                margin:'1rem 0'
            }}
            >
                <button className="search-btn"><Link to={'/detail'}>SEARCH</Link></button>
            </Stack>
        </Box>
        
      </Box>
    </Box>
  );
}

export default SearchBox;
