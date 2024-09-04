import { Box, Typography } from "@mui/material";
import React from "react";
import MenuAccordian from "../Components/Menu/menuAccordian";
import MenuNavbar from "../Components/Menu/menuNavbar";
import menu from "../Assets/menu.webp";
import Amenities from "../Components/Home/Amenities";
import Footer from "../Components/Footer";
import Note from "../Components/Menu/note";

const Menu = () => {
  return (
    <div
      style={{
        position: "relative"
      }}
    >
      <MenuNavbar />
      <Box
        sx={{
          width: "100%",
          height: { xs: "30vh", sm: "50vh" },
          mt: { xs: "80px", sm: "130px" },
          backgroundImage: `url(${menu})`,
          backgroundSize: { xs: "100% 30vh", sm: "cover" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "static",
          boxShadow: "inset 140px 225px 140px 225px rgba(0, 0, 0, 0.45)",
          opacity: 0.8
        }}
      >
        <Typography
          sx={{
            fontFamily: "Merienda",
            fontSize: { xs: "32px", sm: "64px" },
            color: "#fff",
            fontWeight: 700
          }}
        >
          Our Menu
        </Typography>
      </Box>
      <MenuAccordian />
      <Amenities />
      <Footer />
      <Note />
    </div>
  );
};

export default Menu;
