'use client';
import { Box, Button, Input } from "@mui/material";
import Image from "next/image";
import classes from "./video-comment.module.css";
import SubmitComment from "./SubmitComment";
import { useOptimistic, useState } from "react";
import { CommentUserType, userSession, VideoCreatorType } from "@/helper/commonTypes";
import { useSession } from "next-auth/react";
import { DefaultSession, DefaultUser, Session } from "next-auth";
const initState = [1,2,3,4,5];

interface VideoCommentProps{
  video:VideoCreatorType;
  comments:CommentUserType[];
}

export default function VideoComment({video,comments}:VideoCommentProps) {
  
  const [commentArray,setCommentArray] =useState<Partial<CommentUserType>[]>(comments);
  const {data} =useSession();
  let user:userSession;
  if(data){
    user = data.user as userSession;
  }
  // console.log('ses',data);
  


  async function updateComments(comment:string){
    // console.log(comment);
    
    const newComment:Partial<CommentUserType> ={
      comment:comment,
      name:user.name as string,
      user_id:user.id as string,
      image:user.image as string,
      video_id:video.id,
      created_at:new Date().toString()
    }
    setCommentArray(prev =>([newComment,...prev]));

    try {
      await fetch('/api/comment',{
        method:'POST',
        body:JSON.stringify(newComment)
      })
    } catch (error) {
      
    }
    
  }

  
  return (
    <Box>
      <Box>{commentArray.length || 0} comments</Box>
      <SubmitComment updateFn={updateComments}  video={video}/>
      <Box className={classes.commentbox}>
        {commentArray.length > 0 && commentArray.map((comment)=>(
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
