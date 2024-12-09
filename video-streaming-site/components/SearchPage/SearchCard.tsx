import { Box } from "@mui/material";
import Image from "next/image";
import classes from "./search-page.module.css";
import CircleIcon from '@mui/icons-material/Circle';

export default function SearchCard() {
  return (
    <Box className={classes.card}>
      <Box className={classes.image}>
        <Image
          src={"/image/default.jpg"}
          width={500}
          height={280}
          alt="video thumbnail"
        />
      </Box>
      <Box className={classes.detail}>
        <Box>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, eos?
        </Box>
        <Box>
          <span>8.1K views</span>
          <span><CircleIcon /></span> <span>10 days ago</span>
        </Box>
        <Box className={classes.user}>
          <span>
            <Image
              src={"/image/user.png"}
              height={30}
              width={30}
              alt="user profile"
            />
          </span>
          <span>
            Creator name
          </span>
        </Box>
        <Box className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium, sapiente labore repudiandae magnam quas odit repellendus ut libero quos non nostrum culpa minus, hic praesentium delectus eaque ab neque, eos beatae. Ipsam fuga ad vel porro, enim illum ipsa.</Box>
      </Box>
    </Box>
  );
}
