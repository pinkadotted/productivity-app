import { Button, Container, Typography, Box } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import DUMMY_POSTS from "../DUMMY_POSTS";

const BlogPostPage = () => {
  const params = useParams();
  const postId = params.postId;

  const [existingPosts, setExistingPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/blog');
        const data = await response.json();
        setExistingPosts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  console.log('existingPosts:', existingPosts);

  const post = DUMMY_POSTS.find((post) => post._id === postId);
  console.log("POST: ", post);

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box>
          <Link
          to={{
            pathname: `/blog`
          }}
        >
          <Button>Back</Button>
        </Link>
          </Box>
          <Typography variant="h1" color="initial" sx={{ margin: "2rem" }}>
            {post.title}
          </Typography>
          <Typography>Created Date: {post.date}</Typography>
        </Box>

        <Typography variant="body1" color="initial" sx={{ margin: "2rem" }}>
          {post.content}
        </Typography>
        <Link
          to={{
            pathname: `/blog/${postId}/edit`,
            state: { post },
          }}
        >
          <Button>Edit</Button>
        </Link>
      </Container>
    </>
  );
};

export default BlogPostPage;
