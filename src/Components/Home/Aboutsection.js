import { Box, Typography } from "@mui/material";
import React from "react";
import Tandoori from "../../Assets/tandoori.png";
import ScrollToTop from "../ScrollToTop";

const Aboutsection = () => {
  return (
    <Box
      sx={{
        margin: {
          xs: "140px 0px 40px 0px",
          sm: "140px 0px",
          md: "120px 0px 100px 0px",
        },
        display: "flex",
        flexDirection: { sm: "row", xs: "column" },
        width: "100%",
        justifyContent: "space-between",
        position: "relative",
      }}
      id='about'
    >
      <ScrollToTop />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { md: "30%", xs: "87%", sm: "35%" },
          paddingLeft: { xs: "10px", sm: "40px", md: "120px" },
          m: { sm: "0px", xs: "10px auto" },
          padding: "10px",
        }}
      >
        <Typography
          data-aos='fade-up'
          data-aos-duration='1200'
          sx={{
            fontFamily: "Chivo",
            fontWeight: 600,
            fontSize: { xs: "16px", sm: "20px", md: "28px" },
            mb: 3,
          }}
        >
          ABOUT US
        </Typography>
        <Typography
          data-aos='fade-up'
          data-aos-duration='1200'
          sx={{
            fontFamily: "Merienda",
            fontWeight: 700,
            fontSize: { xs: "28px", sm: "42px", md: "60px" },
            lineHeight: { xs: "40px", sm: "48px", md: "70px" },
            mb: 3,
          }}
        >
          Dedicated To
          <br /> Delight You
        </Typography>
        <Typography
          data-aos='fade-up'
          data-aos-duration='1200'
          sx={{
            fontFamily: "Chivo",
            fontWeight: 400,
            fontSize: { xs: "16px", sm: "16px", md: "16px" },
            mb: 3,
            lineHeight: { xs: "28px", sm: "24px" },
            textAlign: "justify",
          }}
        >
          “Basmati” - a charming farm-to-table restaurant located in the heart
          of the city. Our mission is to create delicious, seasonal dishes using
          only the freshest ingredients sourced from local farms and purveyors.
          We believe that food tastes better when it's made with love and care,
          and that's why we put our heart and soul into every dish we create
        </Typography>
        <Typography
          data-aos='fade-up'
          data-aos-duration='1200'
          sx={{
            fontFamily: "Chivo",
            fontWeight: 400,
            fontSize: { xs: "16px", sm: "16px", md: "16px" },
            mb: { xs: 0, sm: 5 },
            lineHeight: { xs: "28px", sm: "24px" },
            textAlign: "justify",
          }}
        >
          A meal at Basmati is one you won't soon forget and value you won’t
          believe.
        </Typography>
        {/* <Box data-aos="fade-up" data-aos-duration="1200">
          <img src={Signature} alt="sign" width="60%" />
        </Box> */}
      </Box>
      <Box
        sx={{
          width: { sm: "48%", xs: "100%" },
          marginTop: { sm: "80px", xs: "10px" },
        }}
      >
        <img src={Tandoori} alt='tandoori' width='100%' style={{}} />
      </Box>
    </Box>
  );
};

export default Aboutsection;
