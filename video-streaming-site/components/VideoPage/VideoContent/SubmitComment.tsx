import { Box, Button } from "@mui/material";

import classes from "./video-comment.module.css";
import { FormEvent, useRef, useTransition } from "react";
import { CommentUserType, VideoCreatorType } from "@/helper/commonTypes";
import { commentAction } from "@/utils/video-methods";
import { useSession } from "next-auth/react";




interface SubmitCommentProps{
    updateFn:(action:Partial<CommentUserType>)=>void
    video:VideoCreatorType
}
export default function SubmitComment({updateFn,video}:SubmitCommentProps) {
    const commentWithId =commentAction.bind(null,video.id);
    const {data,status} =useSession();
    let show = false;
    if(status === 'authenticated'){
        show = true;
    }

    async function actionMethod(event:FormEvent<HTMLFormElement>){
        const form =new FormData(event.target as HTMLFormElement);
        const comment  =form.get('comment') as string;
        const commentData = {...data,comment,created_at:new Date().toDateString()};
        updateFn(commentData as Partial<CommentUserType>);
    }
    
    async function method(FormData:FormData) {
        // const form =new FormData(event.target as HTMLFormElement);
        // console.log(form.entries());
        console.log(FormData.entries());
        
        
    }
    
  return (
    <>
    {
        show && (
            <Box className={classes.form}>
                <form action={method} onSubmit={actionMethod}>
                <Box className={classes.input}><input type="text" name="comment" required/>  </Box>
                <Box className={classes.btn}><Button variant="contained" type="submit" >Comment</Button></Box>
                </form>
            </Box>
        )
    }
    </>
  )
}
