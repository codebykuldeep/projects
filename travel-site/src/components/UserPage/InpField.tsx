import { Box, TextField } from "@mui/material";
import React from "react";
import { validation } from "../utils/validation";
import { InputStateType } from "./userPageTypes";

interface InpFieldProps {
  title: string;
  inputState:InputStateType,
  updateInputState:(error:boolean,errorMsg:string,value:string)=>void;
}
function InpField({ title ,inputState,updateInputState}: InpFieldProps) {
    
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const [msg,validationResult] = validation(title,event.target.value);
    
    if(!validationResult) {
      updateInputState(false,'',event.target.value);
      return;
    }
    updateInputState(true,msg,'');
    
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <label htmlFor={title.toLowerCase()}>{title}</label>
      <TextField
        size="small"
        error={inputState.error}
        id={title}
        name={title.toLowerCase()}
        helperText={inputState.errorMsg}
        onChange={handleChange}
        type={title.toLowerCase() === 'password' ? 'password': 'text'}
      />
    </Box>
  );
}

export default InpField;

