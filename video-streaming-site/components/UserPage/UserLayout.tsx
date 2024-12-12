import { Box, Container } from "@mui/material";
import classes from './user-page.module.css'
import UserDetail from "./UserDetail";
import UserVideo from "./UserVideo";
import UploadVideo from "./UploadVideo";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import UserSection from "./UserSection";

export default function UserLayout() {
  
  
  return (
  <Container maxWidth='lg' className={classes.layout}>
    <UserDetail/>
    <UserSection/>
    
  </Container>
);
}
