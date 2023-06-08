import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Link, useLocation, useParams } from "react-router-dom";
import DUMMY_POSTS from "../DUMMY_POSTS";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const EditBlogPostPage = (props) => {
  const textareaStyles = {
    width: "1000px", // Set the desired width
    height: "400px", // Set the desired height
    resize: "none", // Prevent resizing of the textarea
  };
  const params = useParams();
  const postId = params.postId;
  const post = DUMMY_POSTS.find((post) => post.id === postId);

  const [inputTitle, setInputTitle] = useState(post.title);
  const [inputDesc, setInputDesc] = useState(post.description);
  const [inputText, setInputText] = useState(post.content);

  const submitHandler = () => {
    console.log(DUMMY_POSTS);
    const postDetails = {
      title: inputTitle,
      description: inputDesc,
      content: inputText,
      date: post.date,
      id: postId,
    };
    console.log(postDetails);

    setInputTitle("");
    setInputDesc("");
    setInputText("");

    DUMMY_POSTS.push(postDetails);
    console.log(DUMMY_POSTS);
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
            onChange={(e) => setInputTitle(e.target.value)}
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
          <Typography variant="h6" align="center">
            What would you like to write about today?{" "}
          </Typography>
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
          <Link to="/blog">
            <Button onClick={submitHandler}>Submit</Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default EditBlogPostPage;
