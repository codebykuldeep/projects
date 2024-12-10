'use client';
import { Box, Button } from "@mui/material";
import classes from './UploadForm/upload-video.module.css'
import UploadForm from "./UploadForm/UploadForm";
import UploadButton from "./UploadForm/UploadButton";
import { FormEvent, useActionState } from "react";
import { uploadAction } from "@/utils/form-method";

import Form from 'next/form'

export default function UploadVideo() {
    

    // function handleSubmit(event:any){
    //     event.preventDefault();
    //     const form = new FormData(event.target);
    //     const data = Object.fromEntries(form.entries());
    //     console.log(data);
        
        
    // }

    const [state,formAction] =useActionState(uploadAction,'');

    function handleReset(event:FormEvent){
        event.preventDefault();
    }
  return (
    <Box className={classes.uploadbox}>
        <Box component={'h3'}>Upload a video</Box>
        <Box>
            <form action={formAction} className={classes.form} >

                <UploadForm/>
                {
                    state && (
                        <div className={classes.error}>
                            {<p>{state}</p>}
                        </div>
                    )
                }
                <UploadButton>Upload</UploadButton>
            </form>
        </Box>
    </Box>
  )
}



