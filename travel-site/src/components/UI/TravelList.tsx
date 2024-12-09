import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useDispatch } from "react-redux";
import { listActions } from "../store/listState";
import { Link } from "react-router-dom";


interface travelListItemType{
  place_id:string;
  lat:number;
  lon:number;
  name?:string;
  formatted?:string;
  website?:string;
  address_line1?:string;
  address_line2?:string;
}

export default function TravelList() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const travelList =useSelector((state:RootState)=>state.list.travelList);

  const DrawerList = (
    <Box
      sx={{ width: "500px",padding:'1rem' }}
      role="presentation" 
    >
      <Stack direction={'row'} justifyContent={'space-between'} px={'1rem'} pb={'0.5rem'}>
        <Box component={'h2'}>Travel List</Box>
        <Box onClick={toggleDrawer(false)} sx={{cursor:'pointer'}}><CloseRoundedIcon></CloseRoundedIcon></Box>
        </Stack>
        <Divider />
      <List>
        {
          travelList.length === 0 &&
           (<Box component={'h4'} py={'1rem'}>No places to travel...</Box>)
        }
        {travelList.map((place:travelListItemType)=>(
          <DrawerItem key={place.place_id} place={place}/>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Travel List</Button>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

interface DrawerItemProps{
  place:travelListItemType;
}

function DrawerItem({place}:DrawerItemProps){
  const dispatch = useDispatch<AppDispatch>()
  function deleteItemfromList(){
    dispatch(listActions.removeItemFromList(place));
  }
  return(
    <ListItem>
          <Card sx={{width:'100%'}}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {place.name || place.address_line1}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={`/search/${place.place_id}`}>
              <Button size="small" color="primary">
                view
              </Button>
              </Link>
              <Button size="small" color="primary" onClick={()=>deleteItemfromList()}>
                delete
              </Button>
            </CardActions>
          </Card>
        </ListItem>
  )
}
