import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Grid } from "@mui/material";
import AddButton from "./AddButton";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
// import DUMMY_POSTS from "../DUMMY_POSTS";

export default function Blog() {

  const [existingPosts, setExistingPosts] = useState([]);

  const location = useLocation();
  const [key, setKey] = useState(0);

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

    setKey(prevKey => prevKey + 1);
  }, [location]);

  console.log('existingPosts:', existingPosts);
  
  return (
    <>
      <Grid container spacing={2}>
        {existingPosts.map((post) => (
          <Grid post key={post._id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "50%",
                width: "20rem",
                display: "flex",
                flexDirection: "column",
                margin: "5rem",
              }}
              component={Link}
              to={`/blog/${post._id}`}
            >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Date: {post.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tag: {post.tag}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <AddButton />
    </>
  );
}
