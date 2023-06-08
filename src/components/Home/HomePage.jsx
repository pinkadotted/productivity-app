import React from 'react'
import Navbar from '../Navbar/Navbar';
import { Container, Box } from "@mui/material";

const HomePage = () => {
  return (
    <Container maxWidth="false" disableGutters>
        {/* <Navbar /> */}
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Box
            sx={{
              width: 1200,
              height: 600,
              // backgroundColor: "primary.dark",
              display: "flex",
            }}
          >
            <h1>
              Welcome to the productivity page! Click on the menu items to
              navigate.
            </h1>
          </Box>
        </Container>
      </Container>
  )
}

export default HomePage