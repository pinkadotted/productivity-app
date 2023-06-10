import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Link, useNavigate, redirect, Form } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { red } from "@mui/material/colors";
import FormField from "./Fields/FormField";

const NewBlogPostPage = () => {
  const textareaStyles = {
    width: "1000px", // Set the desired width
    height: "400px", // Set the desired height
    resize: "none", // Prevent resizing of the textarea
  };

  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputText, setInputText] = useState("");
  const [inputDate, setInputDate] = useState(null);

  const navigate = useNavigate();

  const handleDataFromChild = (data) => {
    // Do something with the data received from the child component
    setInputTitle(data);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const postDetails = {
      title: inputTitle,
      description: inputDesc,
      content: inputText,
      date: inputDate.toString(),
    };

    setInputTitle("");
    setInputDesc("");
    setInputText("");
    // setInputDate();

    console.log("Submitting form");
    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postDetails),
    }).then(function (response) {
      console.log(response);
      return response.json();
    });
    console.log("Form submitted.");

    navigate("/blog");
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem",
            alignItems: "center",
          }}
        >
          <FormField sendDataToParent={handleDataFromChild}/>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Description: </Typography>
          <TextField
            fullWidth
            id="fullWidth"
            sx={{ marginLeft: "1rem" }}
            value={inputDesc}
            onChange={(e) => setInputDesc(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h6" align="center">
              What would you like to write about today?{" "}
            </Typography>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={inputDate}
                onChange={(val) => setInputDate(val)}
              />
            </LocalizationProvider>
          </Box>

          <TextareaAutosize
            rows={4}
            placeholder="Enter text"
            style={textareaStyles}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem",
            alignItems: "center",
          }}
        >
          {/* <Link to="/blog"> */}
          <Button to onClick={submitHandler}>
            Submit
          </Button>
          {/* </Link> */}
        </Box>
      </Container>
    </>
  );
};

export default NewBlogPostPage;
