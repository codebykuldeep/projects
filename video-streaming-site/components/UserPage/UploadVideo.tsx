'use client';
import { Box, Button } from "@mui/material";
import classes from './UploadForm/upload-video.module.css'
import UploadForm from "./UploadForm/UploadForm";
import UploadButton from "./UploadForm/UploadButton";
import { FormEvent, useActionState, useState } from "react";
import { uploadAction } from "@/utils/form-method";

import Form from 'next/form'
import { validateFormState, validateResult, validateState, validation } from "@/helper/validation";
import { VideoFormType } from "@/helper/commonTypes";

export default function UploadVideo() {
    
    const [state,formAction,isPending] =useActionState(uploadAction,'');
    const [formState,setFormState] = useState<VideoFormType>(initialformState);
  

  function inputValidation(fieldName:string,fieldValue:string){
    const [text,status] =validation(fieldName,fieldValue);
    setFormState((prev) => ({
      ...prev,
      [fieldName]: {
        status: status,
        message: text,
        value:fieldValue,
      },
    }));
    
    }
    
    const ValidationResult = (validateResult(formState)); //true - all fields correct and filled
  

  function handleChange(event:React.ChangeEvent < HTMLInputElement >){
    inputValidation(event.target.name,event.target.value);
  
  }
  function handleBlur(event:React.FocusEvent< HTMLInputElement>){
    inputValidation(event.target.name,event.target.value);
  }

  function handleValidation(){
    setFormState(validateFormState(formState));
  }
  function handleMedia(mediaName:string){
    setFormState(prev=>({...prev,
        [mediaName]:{
            status:false,
            message:'',
            value:'uploaded'
        }
    }))
  }

  // async function sendData(event:React.FormEvent<HTMLFormElement>){
  //   event.preventDefault();
  //   const form =new FormData(event.target as HTMLFormElement)
  //   const res =await fetch('/api/upload',{
  //     method:'POST',
      
  //     body:JSON.stringify({
  //       title:form.get('title'),
  //       image:form.get('image')
  //     })
  //  });
  //   console.log(await res.json());
    

  // }
    
  return (
    <Box className={classes.uploadbox}>
        <Box component={'h3'}>Upload a video</Box>
        <Box>
            <form action={formAction} className={classes.form} >

                <UploadForm handleBlur={handleBlur} handleChange={handleChange} formState={formState}  handleMedia={handleMedia}/>
                {
                    state && (
                        <div className={classes.error}>
                            {<p>{state}</p>}
                        </div>
                    )
                }
                <UploadButton isPending={isPending} onClick={handleValidation} disabled={!ValidationResult}>{isPending ? 'Uploading' : 'Upload'}</UploadButton>
            </form>
        </Box>
    </Box>
  )
}



const initialformState ={
    title:{
        status:false,
        message:'',
        value:''
    },
    description:{
        status:false,
        message:'',
        value:''
    },
    category:{
        status:false,
        message:'',
        value:''
    },
    image:{
        status:true,
        message:'',
        value:''
    },
    video:{
        status:true,
        message:'',
        value:''
    },
}



