import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#00bcd4", opacity: 0.8 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Subesh's App
          </Typography>
          {/* <Button color="inherit">Blog</Button>
          <Button color="inherit">To-do</Button>
          <Button color="inherit">Daily Logbook</Button> */}
          <Box sx={{ display: 'flex', height: '5vh', alignItems: 'center', gap: 2, textDecoration: "none" }}>
            <NavLink to="/blog" sx={{ textDecoration: "none" }}>
              Blog
            </NavLink>
            <NavLink to="/to-do" sx={{ textDecoration: "none" }}>To-do</NavLink>
            <NavLink to="/logbook" sx={{ textDecoration: "none" }}>Daily Logbook</NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
