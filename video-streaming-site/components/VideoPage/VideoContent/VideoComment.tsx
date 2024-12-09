import { Box } from "@mui/material";
import Image from "next/image";
import classes from "./video-comment.module.css";
export default function VideoComment() {
  return (
    <Box>
      <Box>80 comments</Box>
      <Box className={classes.commentbox}>
        {[1,2,3,4,5].map((val)=>(
            <Box key={val} className={classes.comment}>
            <Box className={classes.image}>
              <Image
                src={"/image/user.png"}
                height={35}
                width={35}
                alt="comment user profile"
              />
            </Box>
            <Box>
              <p>@userId</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
                voluptatem!
              </p>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
