import { Box } from "@mui/material";
import Image from "next/image";
import classes from './user-detail.module.css'

export default function UserDetail() {
  return (
    <Box className={classes.detail}>
        <Box className={classes.image}>
            <Image src={'/image/user.png'} alt="user profile" width={160} height={160}/>
        </Box>
        <Box className={classes.text}>
            <Box component={'h1'}>Creator Name</Box>
            <Box component={'p'}>creater@email.com</Box>
        </Box>
    </Box>
  )
}
