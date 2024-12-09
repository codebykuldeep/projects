'use client'
import { useState } from 'react';
import classes from './auth-page.module.css'
import { TextField } from '@mui/material';
import { validation } from '@/helper/validation';

interface InpFieldProps{
  title:string;
  type:string;
  place:string;

}
export default function InpField({title,type,place}:InpFieldProps) {
  const [error,SetError] =useState(false);
  const [msg,SetMsg] = useState('');
  function inputValidation(fieldName:string,fieldValue:string){
    const [text,status] =validation(fieldName,fieldValue);
    SetError(status);
    SetMsg(text);
  }

  function handleChange(event:React.ChangeEvent < HTMLInputElement >){
    inputValidation(event.target.name,event.target.value);
  
  }
  function handleBlur(event:React.FocusEvent< HTMLInputElement>){
    inputValidation(event.target.name,event.target.value);
  }
  return (
    <>
    <TextField
                className={classes.input}
                onChange={handleChange}
                onBlur={handleBlur}
                name={title.toLowerCase()}
                error={error}
                type={type}
                id={type}
                label={title}
                placeholder={place}
                helperText={msg}
                variant="filled"
              />
    </>
  )
}
