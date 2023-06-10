import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
// import DUMMY_POSTS from "../DUMMY_POSTS";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import dayjs from 'dayjs';

const EditBlogPostPage = () => {
  const textareaStyles = {
    width: "1000px", // Set the desired width
    height: "400px", // Set the desired height
    resize: "none", // Prevent resizing of the textarea
  };

  const location = useLocation();
  const selectedPost = location.state;

  console.log("selectedPost3: ", selectedPost);

  const [inputTitle, setInputTitle] = useState(selectedPost.title);
  const [inputDesc, setInputDesc] = useState(selectedPost.description);
  const [inputText, setInputText] = useState(selectedPost.content);
  const [inputDate, setInputDate] = useState(dayjs(selectedPost.date));

  const navigate = useNavigate();

  const submitHandler = () => {
    const postDetails = {
      title: inputTitle,
      description: inputDesc,
      content: inputText,
      date: inputDate,
      _id: selectedPost._id,
    };
    console.log(postDetails);

    setInputTitle("");
    setInputDesc("");
    setInputText("");

    fetch(`http://localhost:5000/blog/${selectedPost._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postDetails),
    }).then(function (response) {
      console.log(response);
      return response.json();
    });
    console.log("Form successfully edited.");

    navigate(`/blog/${selectedPost._id}`);
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
          <Typography variant="h3">Title: </Typography>
          <TextField
            fullWidth
            id="fullWidth"
            sx={{ marginLeft: "1rem" }}
            value={inputTitle}
            onChange={(e) => {
              setInputTitle(e.target.value);
            }}
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
                validateDate={false}
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

export default EditBlogPostPage;
