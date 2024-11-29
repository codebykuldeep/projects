import {Box, Button, Card, CardContent, CardMedia, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { listActions } from '../store/listState';
import { Link } from 'react-router-dom';
// import { PlaceType } from './InterfaceModel';

interface ResultCardProps{
  place:any
}

function ResultCard({place}:ResultCardProps) {
  const dispatch =useDispatch<AppDispatch>();
  const [like,setLike] = useState(false);

  function addItemToTravelList(){
    dispatch(listActions.addItemToList(place.properties));
  }
  function removeItem(){
    dispatch(listActions.removeItemFromList(place.properties));
  }
  function handlePlaceLike(){
    if(!like){
      addItemToTravelList();
      setLike(true);
      return;
    }
    console.log('remove');
    
    removeItem();
    setLike(false);

  }
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="194"
      image="https://placehold.co/400"
      alt="Paella dish"
    />
    <CardContent>
        <Box component={'h3'}>{place.properties.name || place.properties.address_line1}</Box>
        <Box component={'p'} sx={{color:'#808080',py:1}}><i className="fa-solid fa-location-dot"></i> {place.properties.address_line2}</Box>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       This is a famous place
      </Typography>
    </CardContent>
    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} p={1}>
      <Box>
      <IconButton aria-label="add to favorites" onClick={handlePlaceLike}>
        <FavoriteIcon  sx={{color:like ? 'red' : ''}}/>
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      </Box>
      <Link to={`/search/${place.properties.place_id}`}><Button variant="contained">Visit</Button></Link>
    </Stack>
  </Card>
  )
}

export default ResultCard