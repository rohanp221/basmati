import { Box, Typography } from "@mui/material";
import React from "react";

const Note = () => {
  return (
    <Box
      data-aos="fade-up"
      data-aos-duration="1500"
      sx={{
        width: { xs: "100%", sm: "350px" },
        height: "80px",
        borderRadius: "5px",
        backgroundColor: "#492B29",
        color: "#fff",
        position: "fixed",
        zIndex: 10,
        display: { sm: "none", xs: "flex" },
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        bottom: { xs: 0, sm: "5%" },
        left: { xs: 0, sm: "5%" },
        opacity: "0.5",
      }}
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      <Typography
        sx={{
          fontFamily: "Chivo",
          fontSize: "18px",
          px: 2,
        }}
      >
        <b>Allergy Note:</b> Please call us and order if you have any food
        allergies
      </Typography>
    </Box>
  );
};

export default Note;
