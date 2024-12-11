'use client'
import { useState } from 'react';
import classes from './auth-page.module.css'
import { TextField } from '@mui/material';
import { validation } from '@/helper/validation';
import { ChangeEvent, ErrorStateType } from '@/helper/commonTypes';



interface InpFieldProps{
  title:string;
  type:string;
  place:string;
  handleChange:(event:ChangeEvent)=>void;
  handleBlur:(event:React.FocusEvent< HTMLInputElement>)=>void;
  errorState:ErrorStateType;
  
}
export default function InpField({title,type,place,errorState,handleBlur,handleChange}:InpFieldProps) {
  const [error,SetError] =useState(false);
  const [msg,SetMsg] = useState('');
  const [value,setValue] =useState('');
  const fieldName = title.toLowerCase();
  // function inputValidation(fieldName:string,fieldValue:string){
  //   const [text,status] =validation(fieldName,fieldValue);
  //   setValue(fieldValue);
  //   setErrorState((prev) => ({
  //     ...prev,
  //     [fieldName]: {
  //       status: status,
  //       message: text,
  //     },
  //   }));
    
  // }
  function handleUpdate(event:ChangeEvent){
    handleChange(event);
    setValue(event.target.value);
  }


  // function handleChange(event:React.ChangeEvent < HTMLInputElement >){
  //   inputValidation(event.target.name,event.target.value);
  
  // }
  // function handleBlur(event:React.FocusEvent< HTMLInputElement>){
  //   inputValidation(event.target.name,event.target.value);
  // }
  return (
    <>
    <TextField
                className={classes.input}
                onChange={handleUpdate}
                onBlur={handleBlur}
                name={title.toLowerCase()}
                error={errorState[fieldName as keyof ErrorStateType]?.status}
                type={type}
                id={title}
                label={title}
                placeholder={place}
                helperText={errorState[fieldName as keyof ErrorStateType]?.message}
                variant="filled"
                defaultValue={value}
              />
    </>
  )
}
