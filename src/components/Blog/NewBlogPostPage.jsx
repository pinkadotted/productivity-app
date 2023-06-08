import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useParams } from "react-router-dom";
import DUMMY_POSTS from "../DUMMY_POSTS";
import TextField from "@mui/material/TextField";

const NewBlogPostPage = () => {
  const textareaStyles = {
    width: "1000px", // Set the desired width
    height: "400px", // Set the desired height
    resize: "none", // Prevent resizing of the textarea
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
          <TextField fullWidth id="fullWidth" sx={{ marginLeft: "1rem" }} />
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
          <TextField fullWidth id="fullWidth" sx={{ marginLeft: "1rem" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" align="center">
            What would you like to write about today?{" "}
          </Typography>
          <TextareaAutosize
            rows={4}
            placeholder="Enter text"
            style={textareaStyles}
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
          <Button>Submit</Button>
        </Box>
      </Container>
    </>
  );
};

export default NewBlogPostPage;
