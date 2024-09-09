import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-grid-carousel";
import Specialvadapav from "../../Assets/Special-vada-pav.png";
import RegularVadapav from "../../Assets/regular-vada-pav.png";
import ButterVadapav from "../../Assets/Butter-vada-pav.png";
import CheeseVadapav from "../../Assets/Cheese-vada-pav.png";
import SamosaPav from "../../Assets/Samosa-pav.png";
import Dabeli from "../../Assets/dabeli.png";
import DoubleMaggieMasala from "../../Assets/double-masala-maggi.png";
import MasalaMaggie from "../../Assets/Masala-maggi.png";
import Viewmore from "../../Assets/Icons/ph_arrow-circle-right.svg";
import { useNavigate } from "react-router-dom";

const Dishes = [
  {
    id: 0,
    img: RegularVadapav,
    name: "Regular Vada Pav",
    price: "CA$ 4.59"
  },
  {
    id: 1,
    img: ButterVadapav,
    name: "Butter Vada Pav",
    price: "CA$ 5.49"
  },
  {
    id: 2,
    img: CheeseVadapav,
    name: "Cheese Vada Pav",
    price: "CA$ 5.49"
  },
  {
    id: 3,
    img: Specialvadapav,
    name: "Special Vada Pav",
    price: "CA$ 5.49"
  },
  {
    id: 4,
    img: SamosaPav,
    name: "Samosa Pav",
    price: "CA$ 4.59"
  },
  {
    id: 5,
    img: MasalaMaggie,
    name: "Masala Maggie",
    price: "CA$ 5.99"
  },
  {
    id: 6,
    img: DoubleMaggieMasala,
    name: "Double Masala Maggie",
    price: "CA$ 6.99"
  },
  {
    id: 7,
    img: Dabeli,
    name: "Dabeli",
    price: "CA$ 5.49"
  }
];

const StreetSplashDishes = () => {
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
          overflow: "hidden",
          padding: "20px 0px"
        }}
        justifyContent={{ xs: "center", sm: "space-between" }}
      >
        {Dishes.map((item) => (
          <Card
            key={item.id}
            sx={{
              width: { xs: "100%", sm: "260px" },
              height: { xs: "100%", sm: "260px" },
              position: "relative",
              borderRadius: "10px",
              overflow: "visible",
              mt: { xs: 10, sm: 10 }
            }}
          >
            <img
              src={item.img}
              alt="receipe"
              style={{
                position: "absolute",
                left: 0,
                top: -60,
                zIndex: 2
              }}
            />
            <Stack
              spacing={1}
              sx={{
                paddingTop: "100px",
                paddingLeft: "30px",
                paddingBottom: "10px"
              }}
            >
              <Box
                sx={{
                  width: "90px",
                  backgroundColor: "#E85A2C",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50px",
                  fontFamily: "Chivo",
                  fontSize: "18px",
                  fontWeight: "600",
                  my: 2,
                  py: 1,
                  px: 2
                }}
              >
                {item.price}
              </Box>
              <Typography
                sx={{
                  fontFamily: "Merienda",
                  fontSize: { xs: "16px", sm: "22px" },
                  fontWeight: 700
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
          paddingbottom: "10px"
        }}
      >
        <Carousel loop={true} autoplay={2000} speed={2000}>
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
                  mb: 2
                }}
              >
                <img
                  src={item.img}
                  alt="receipe"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: -60,
                    zIndex: 2
                  }}
                />
                <Stack
                  spacing={1}
                  sx={{
                    paddingTop: "100px",
                    paddingLeft: "30px",
                    paddingBottom: "10px"
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
                      px: 2
                    }}
                  >
                    {item.price}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Merienda",
                      fontSize: "20px",
                      fontWeight: 700
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
          mt: 2
        }}
        onClick={() => {
          navigate("/menu");
          window.scrollTo(0, 0);
        }}
      >
        <Typography
          sx={{
            fontFamily: "Chivo",
            fontSize: "16px"
          }}
        >
          More Recipes
        </Typography>
        <img src={Viewmore} alt="view more" />
      </Stack>
    </Stack>
  );
};

export default StreetSplashDishes;
