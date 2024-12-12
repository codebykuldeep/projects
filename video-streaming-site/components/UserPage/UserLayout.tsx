import { Box, Container } from "@mui/material";
import classes from './user-page.module.css'
import UserDetail from "./UserDetail";
import UserVideo from "./UserVideo";
import UploadVideo from "./UploadVideo";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import UserSection from "./UserSection";
import { serverSession } from "@/auth";
import { getVideosByUser } from "@/lib/video";
import { VideoType } from "@/helper/commonTypes";

export default async function UserLayout() {
  const session = await serverSession();
  if(!session){
    redirect('/home');
  }
  let user = session.user as any;
  
  const videos = getVideosByUser(user.id)
  console.log(videos);
  
  return (
  <Container maxWidth='lg' className={classes.layout}>
    <UserDetail/>
    <UserSection videos={videos as VideoType[]}/>
    
  </Container>
);
}
