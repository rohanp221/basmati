import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-grid-carousel";
import dalmakhani from "../../Assets/dalmakhani.png";
import gongooramutton from "../../Assets/gongooramutton.png";
import chanamasala from "../../Assets/chanamasala.png";
import palakpaneer from "../../Assets/palakpaneer.png";
import kadaichicken from "../../Assets/kadaichicken.png";
import lambcurry from "../../Assets/lambcurry.png";
import bendimasala from "../../Assets/bendimasalacurry.png";
import mixedvegcurry from "../../Assets/mixedvegcurry.png";
import Viewmore from "../../Assets/Icons/ph_arrow-circle-right.svg";
import { useNavigate } from "react-router-dom";

const Dishes = [
  {
    id: 0,
    img: dalmakhani,
    name: "Dal Makhni",
    price: "CA$ 13.99",
  },
  {
    id: 1,
    img: mixedvegcurry,
    name: "Mixed Vegetable Curry",
    price: "CA$ 13.99",
  },
  {
    id: 2,
    img: palakpaneer,
    name: "Palak Paneer",
    price: "CA$ 14.99",
  },
  {
    id: 3,
    img: kadaichicken,
    name: "Butter Chicken",
    price: "CA$ 14.99",
  },
  {
    id: 4,
    img: lambcurry,
    name: "Rayalaseema Chicken Currry",
    price: "CA$ 14.99",
  },
  {
    id: 5,
    img: gongooramutton,
    name: "Andhra Gongura Mutton Curry",
    price: "CA$ 15.99",
  },
  {
    id: 6,
    img: chanamasala,
    name: "Chana Masala",
    price: "CA$ 13.99",
  },
  {
    id: 7,
    img: bendimasala,
    name: "Bendi Masala Curry",
    price: "CA$ 14.99",
  },
];

const Curriesreceipes = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="column">
      <Stack
        data-aos="zoom-in"
        data-aos-duration="1000"
        sx={{
          display: { xs: "none", sm: "flex" },
          flexWrap: "wrap",
          flexDirection: "row",
          transition: "all 0.3s ease-in",
          height: "auto",
          overflow: "hidden",
          padding: "20px 0px",
        }}
        justifyContent={{ xs: "center", sm: "space-between" }}
      >
        {Dishes.map((item) => (
          <Card
            sx={{
              width: { xs: "100%", sm: "260px" },
              height: { xs: "100%", sm: "260px" },
              position: "relative",
              borderRadius: "10px",
              overflow: "visible",
              mt: { xs: 10, sm: 10 },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: -60,
                zIndex: 2,
              }}
            >
              <img src={item.img} alt="receipe" />
            </Box>
            <Stack
              spacing={1}
              sx={{
                paddingTop: "100px",
                paddingLeft: "30px",
                paddingBottom: "10px",
              }}
            >
              <Box
                sx={{
                  width: "90px",
                  backgroundColor: "#E85A2C",
                  color: "#fff",
                  borderRadius: "50px",
                  fontFamily: "Chivo",
                  fontSize: "18px",
                  fontWeight: "600",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  my: 2,
                  py: 1,
                  px: 2,
                }}
              >
                {item.price}
              </Box>
              <Typography
                sx={{
                  fontFamily: "Merienda",
                  fontSize: "22px",
                  fontWeight: 700,
                }}
              >
                {item.name}
              </Typography>
            </Stack>
          </Card>
        ))}
      </Stack>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          paddingbottom: "10px",
        }}
      >
        <Carousel loop={true} showDots={true} autoplay={2000} speed={2000}>
          {Dishes.map((item) => (
            <Carousel.Item>
              <Card
                key={item.id}
                sx={{
                  width: "100%",
                  height: "260px",
                  position: "relative",
                  borderRadius: "10px",
                  overflow: "visible",
                  mt: 10,
                  mb: 2,
                }}
              >
                <img
                  src={item.img}
                  alt="receipe"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: -60,
                    zIndex: 2,
                  }}
                />
                <Stack
                  spacing={1}
                  sx={{
                    paddingTop: "100px",
                    paddingLeft: "30px",
                    paddingBottom: "10px",
                  }}
                >
                  <Box
                    sx={{
                      width: "80px",
                      backgroundColor: "#E85A2C",
                      color: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50px",
                      fontFamily: "Chivo",
                      fontSize: "16px",
                      fontWeight: "600",
                      my: 2,
                      py: 1,
                      px: 2,
                    }}
                  >
                    {item.price}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Merienda",
                      fontSize: "20px",
                      fontWeight: 700,
                    }}
                  >
                    {item.name}
                  </Typography>
                </Stack>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{
          cursor: "pointer",
          mt: 2,
        }}
        onClick={() => {
          navigate("/menu");
          window.scrollTo(0, 0);
        }}
      >
        <Typography
          sx={{
            fontFamily: "Chivo",
            fontSize: "16px",
          }}
        >
          More Receipes
        </Typography>
        <img src={Viewmore} alt="view more" />
      </Stack>
    </Stack>
  );
};

export default Curriesreceipes;
