'use client';
import { Box, Button, Input } from "@mui/material";
import Image from "next/image";
import classes from "./video-comment.module.css";
import SubmitComment from "./SubmitComment";
import { useOptimistic, useState } from "react";
import { CommentUserType, VideoCreatorType } from "@/helper/commonTypes";
const initState = [1,2,3,4,5];

interface VideoCommentProps{
  video:VideoCreatorType;
  comments:CommentUserType[];
}

export default function VideoComment({video,comments}:VideoCommentProps) {
  // const [commentArray,setCommentArray] =useState<Partial<CommentUserType[]>>(comments);
  const [commentArray,setCommentArray] =useState<any[]>(comments);

  function addCommentUI(data:Partial<CommentUserType>){
    setCommentArray(prev=>{
      
      return [data,...prev]
    })
  }

  return (
    <Box>
      <Box>{comments.length || 0} comments</Box>
      <SubmitComment updateFn={addCommentUI} video={video}/>
      <Box className={classes.commentbox}>
        {comments.length > 0 && comments.map((comment)=>(
            <Box key={comment.created_at} className={classes.comment}>
            <Box className={classes.image}>
              <Image
                src={"/image/user.png"}
                height={35}
                width={35}
                alt="comment user profile"
              />
            </Box>
            <Box>
              <p>@{comment.name}</p>
              <p>
                {comment.comment}
              </p>
            </Box>
          </Box>
        ))}
        {
          (comments && comments.length === 0) && <p>No comments on this video</p>
        }
      </Box>
    </Box>
  );
}
