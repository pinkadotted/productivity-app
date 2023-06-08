import { Button, Container, Typography, Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import DUMMY_POSTS from "../DUMMY_POSTS";

const BlogPostPage = () => {
  const params = useParams();
  const postId = params.postId;
  const post = DUMMY_POSTS.find((post) => post.id === postId);

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
          <Typography variant="h1" color="initial" sx={{ margin: "2rem" }}>
            {post.title}
          </Typography>
                  <Typography>Date: { post.date}</Typography>
        </Box>

        <Typography variant="body1" color="initial" sx={{ margin: "2rem" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          quis error impedit dolores itaque odit cum sit velit, iure animi id ex
          sint quos dolore repellat sapiente doloribus voluptatem minima
          cupiditate ea consequatur vero pariatur mollitia quidem? Adipisci,
          repellendus alias hic voluptates, beatae distinctio et molestias
          doloremque odio obcaecati quas dicta perferendis libero, illum in!
          Nobis illum quaerat cumque fugiat, ratione deleniti vero officiis
          dolorum voluptatum in ea ipsum? Consequatur quisquam quibusdam magnam
          exercitationem, cumque quo, veniam vel consectetur iste fugiat quod
          labore temporibus optio consequuntur libero esse officiis rerum,
          blanditiis ex? Quia eligendi beatae officiis omnis itaque recusandae
          magnam nisi. Nihil optio libero consequuntur reiciendis officiis
          numquam eaque saepe velit, illum quam nulla blanditiis provident rem
          quia dolorem nemo at necessitatibus veniam voluptate nesciunt unde,
          dolore totam illo. Eius accusamus distinctio beatae sapiente numquam
          dolorem earum nesciunt, culpa quibusdam, harum provident quis,
          necessitatibus atque alias. Obcaecati, quibusdam laboriosam ad
          repellat mollitia quasi aut provident tenetur, soluta molestiae eum
          cum assumenda aperiam perferendis, ducimus corrupti ex quos autem
          aspernatur deleniti hic unde corporis inventore sapiente. Tempora
          nobis veritatis expedita laudantium facere. Corporis eum aliquid
          maiores voluptatem dolorum, vel ratione et debitis odio exercitationem
          iste voluptatibus similique cupiditate est dolor cumque reprehenderit
          sit! Eveniet quae, iure ducimus laborum impedit cumque soluta est hic
          placeat culpa quos velit rerum consectetur deserunt inventore deleniti
          eum aliquid esse, quas qui. Sapiente doloremque molestiae perferendis
          iusto earum. Alias, commodi eaque repellat eligendi doloremque
          voluptates aliquam. Consequatur nemo quaerat labore laudantium aliquam
          doloremque dolorem. Beatae omnis ipsa sapiente eligendi obcaecati iste
          quas consequatur dicta nisi saepe facilis architecto eaque quod
          voluptatem at ratione dolore, totam nam. Cumque, sapiente veritatis.
          Nulla officia laboriosam repudiandae quo unde quod molestias debitis
          eius placeat, beatae rerum modi reiciendis? Veniam iste vitae incidunt
          pariatur ipsum enim omnis, maxime ad fuga sed.
        </Typography>
        <Button>Edit</Button>
      </Container>
    </>
  );
};

export default BlogPostPage;
