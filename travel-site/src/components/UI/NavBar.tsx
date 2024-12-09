import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import TravelList from "./TravelList";
import UserState from "../UserPage/UserState";


function NavBar() {
  

  const LinkCss ={cursor:'pointer',fontWeight:'600',fontSize:'16px',fontFamily:'Lato,serif,sans-serif'};

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "white",
        color: "black",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Box component={"nav"} sx={{ height: "100%",padding:'10px 0' }}>
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Stack direction={"row"} gap={2}>
              <Box>LOGO</Box>
              <Link to={'/'}><Box sx={LinkCss}>Home</Box></Link>
              <Link to={'search'}><Box sx={LinkCss}>Search</Box></Link>
              <Link to={'hotel'}><Box sx={LinkCss}>Hotels</Box></Link>
            </Stack>

            <Stack direction={"row"}
            sx={{ justifyContent: "space-between", alignItems: "center",gap:'10px' }} 
            >
              <TravelList/>
              <UserState/>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </AppBar>
  );
}
export default NavBar;
