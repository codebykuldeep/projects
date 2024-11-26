import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { validation } from "../utils/validation";

interface InpFieldProps {
  title: string;
}
function InpField({ title }: InpFieldProps) {
    const [error,setError ] =useState<boolean>(false);
    const [errorMsg,setErrorMsg] =useState<string>('');


  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const [msg,validationResult] = validation(title,event.target.value);
    setError(validationResult);
    setErrorMsg(msg);
    
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <label htmlFor={title.toLowerCase()}>{title}</label>
      <TextField
        size="small"
        error={error}
        id="outlined-error"
        name={title.toLowerCase()}
        helperText={errorMsg}
        onChange={handleChange}
      />
    </Box>
  );
}

export default InpField;
