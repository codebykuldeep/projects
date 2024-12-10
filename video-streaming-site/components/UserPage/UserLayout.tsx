import { Box, Container } from "@mui/material";
import classes from './user-page.module.css'
import UserDetail from "./UserDetail";
import UserVideo from "./UserVideo";
import UploadVideo from "./UploadVideo";

export default function UserLayout() {

  return (
  <Container maxWidth='lg' className={classes.layout}>
    <UserDetail/>
    <Box component={'ul'} className={classes.link}>
            <Box component={'li'}>Videos</Box>
            <Box component={'li'}>Upload</Box>
            <Box component={'li'}>Profile</Box>
        </Box>
    {/* <UserVideo/> */}
    <UploadVideo/>
  </Container>
);
}
