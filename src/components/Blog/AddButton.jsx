import { Fab, Box } from "@mui/material";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        height: "10rem",
        width: "10rem",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link to='/blog/new'>
        <Fab
          color="info"
          aria-label="Add"
          sx={{ width: "6rem", height: "6rem" }}
        >
          <img src="../../plus.png" alt="" />
        </Fab>
      </Link>
    </Box>
  );
};

export default AddButton;
