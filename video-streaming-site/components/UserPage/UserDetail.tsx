
import { Box } from "@mui/material";
import Image from "next/image";
import classes from './user-detail.module.css'
import { serverSession } from "@/auth";
import { UserType } from "@/helper/commonTypes";
import { User } from "next-auth";


export default async  function UserDetail() {
  const data  =await serverSession();
  let user =data?.user;
  
  
  return (
    <Box className={classes.detail}>
        <Box className={classes.image}>
            <Image src={user?.image ||'/image/user.png'} alt="user profile" width={160} height={160}/>
        </Box>
        <Box className={classes.text}>
            <Box component={'h1'}>{user?.name || 'Creator Name' }</Box>
            <Box component={'p'}>{user?.email || 'creater@email.com' }</Box>
        </Box>
    </Box>
  )
}
