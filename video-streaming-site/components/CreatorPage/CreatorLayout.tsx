import React from 'react'
import UserDetail from '../UserPage/UserDetail'
import { Box, Container } from '@mui/material'
import UserVideo from '../UserPage/UserVideo'
import classes from '../UserPage/user-page.module.css'
import CreatorDetail from './CreatorDetail'
import { getUserById } from '@/lib/user'
import { UserType, VideoType } from '@/helper/commonTypes'
import { getVideosByUser } from '@/lib/video'

export default function CreatorLayout({ userId}: {userId: string}) {
  const user = getUserById(userId) as UserType;
  const videos = getVideosByUser(userId) as VideoType[];
  
  
  return (
    <Container maxWidth='lg' className={classes.layout}>
    <CreatorDetail user={user}/>
    <Box component={'ul'} className={classes.link}>
            <Box component={'li'}>Videos</Box>
        </Box>
    <UserVideo videos={videos}/>
    
  </Container>
  )
}
