import React, { useState } from "react";
import { Typography, TextField } from "@mui/material";

const FormField = ({sendDataToParent}) => {
  const [input, setInput] = useState("");
  const [fieldProps, setFieldProps] = useState({
    label: "",
    id: "",
    error: false,
  });
    
    

  const fieldChangeHandler = (e) => {
      setInput(e.target.value);
      
      sendDataToParent(e.target.value);

    if (e.target.value.trim() === "") {
      console.log("Please enter something!");
      setFieldProps({
        label: "Please enter a title.",
        id: "outlined-error",
        error: true,
      });
      }
    else {
        setFieldProps({
            label: "",
            id: "",
            error: false,
          });
      }
  };

  return (
    <>
      <Typography variant="h3">Title: </Typography>

      <TextField
        fullWidth
        error={false}
        sx={{ marginLeft: "1rem" }}
        id="outlined-error"
        label=""
        value={input}
              onBlur={fieldChangeHandler}
        //   onChange={e => setInput(e.target.value)}
          onChange={fieldChangeHandler}
        {...fieldProps}
      />
    </>
  );
};

export default FormField;
