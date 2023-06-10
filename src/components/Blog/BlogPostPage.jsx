import { Button, Container, Typography, Box } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import DUMMY_POSTS from "../DUMMY_POSTS";

const BlogPostPage = () => {
  const params = useParams();
  const postId = params.postId;
  console.log('postId: ', postId)

  const [selectedPost, setSelectedPost] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:5000/blog/${postId}`);
        const data = await response.json();
        setSelectedPost(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  console.log('selectedPost:', selectedPost);

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
            {selectedPost.title}
          </Typography>
          <Typography>Created Date:
            {selectedPost.date}
          </Typography>
        </Box>

        <Typography variant="body1" color="initial" sx={{ margin: "2rem" }}>
          {selectedPost.content}
        </Typography>
        <Link
          to={{
            pathname: `/blog/${postId}/edit`,
            state: { selectedPost },
          }}
        >
          <Button>Edit</Button>
        </Link>
      </Container>
    </>
  );
};

export default BlogPostPage;
