import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";
import Biryani from "../Assets/briyani.png";
import Aboutsection from "../Components/Home/Aboutsection";
import Exploresection from "../Components/Home/Exploresection";
import Reviewsection from "../Components/Home/Reviewssection";
import Amenities from "../Components/Home/Amenities";
import Footer from "../Components/Footer";
import Homeshape from "../Assets/homeshape.png";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Box>
      <Helmet>
        <title>Basmati Indian Cuisine</title>
        <meta name="title" content="Basmati Indian Cuisine | Canada" />

        <meta
          name="keywords"
          content={
            "Basmati,Indianrestaurent,Indiancuisine,Basmati indian cuisine,Best Indian food in canada, Indianrestaurent in canada"
          }
        />
        <meta name="robots" content="index,follow" />
        <meta http-equiv="Content-Type" content={""} />
        <meta name="language" content="english" />
        <meta name="revisit-after" content="1 day" />
        <meta name="author" content="Basmati" />
        <meta name="document-type" content="Public" />
        <meta name="Copyright" content="Basmati" />
        <meta name="googlebot" content="index,follow" />
        <meta name="YahooSeeker" content="index,follow" />
        <meta name="msnbot" content="index,follow" />
        <meta name="allow-search" content="yes" />
        <meta name="document-distribution" content="Global" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.placename" content="Canada" />
        <meta
          name="geo.position"
          content="43.87423505167694, -78.96219826115689"
        />
        <meta name="ICBM" content="43.87423505167694, -78.96219826115689" />
        <meta name="theme-color" content="#fff" />
        <meta
          property="og:description"
          content="Basmati - a charming farm-to-table restaurant located in the heart of the city. Our mission is to create delicious, seasonal dishes using only the freshest ingredients sourced from local farms and purveyors. We believe that food tastes better when it's made with love and care, and that's why we put our heart and soul into every dish we create"
        />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="Basmati Indian cuisine" />
        <meta property="og:url" content="https://basmatiindiancuisine.ca/" />
        <meta charSet="utf-8 " />
      </Helmet>
      <Navbar />
      <Box
        sx={{
          backgroundColor: "#EAAB2A",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          height: { md: "100vh", xs: "70vh", sm: "70vh" },
          position: "relative",
          py: 2
        }}
        id="home"
      >
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            bottom: -5
          }}
        >
          <img src={Homeshape} alt="" width="100%" />
        </Box>
        <Box
          sx={{
            width: "80%",
            margin: "auto",
            marginTop: { md: "250px", xs: "70px", sm: "100px" },
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: { xs: "0px", sm: "80px", md: 0 }
          }}
        >
          <Box
            sx={{
              width: { sm: "50%", md: "45%", xs: "100%" },
              display: "flex",
              flexDirection: "column",
              marginTop: { xs: "70px", sm: 0 }
            }}
          >
            <Typography
              data-aos="fade-up"
              data-aos-duration="1200"
              sx={{
                fontFamily: "Sail",
                fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.5rem" },
                color: "#fff"
              }}
            >
              Welcome to Authentic Indian cuisine
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-duration="1200"
              sx={{
                fontFamily: "Merienda",
                fontSize: { xs: "3rem", sm: "3.5rem", md: "5rem" },
                fontWeight: 700,
                color: "#fff"
              }}
            >
              Food is Art
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-duration="1200"
              sx={{
                fontFamily: "Chivo",
                fontWeight: 400,
                fontSize: { xs: "0.9rem", sm: "1.2rem", md: "1.3rem" },
                color: "#fff"
              }}
            >
              Our dishes are not a list of ingredients, they're a blend of
              techniques, cultures and passion.
            </Typography>
          </Box>
          <Box
            data-aos="zoom-in-up"
            data-aos-duration="1200"
            sx={{
              display: { xs: "block", sm: "block" },
              width: { sm: "45%", xs: "100%", md: "45%" },
              height: "100%"
            }}
          >
            <img alt="" src={Biryani} width="100%" height="100%" />
          </Box>
        </Box>
      </Box>
      <Aboutsection />
      <Exploresection />
      <Reviewsection />
      <Amenities />
      <Footer />
    </Box>
  );
};

export default Home;
