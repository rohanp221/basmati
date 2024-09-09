import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-grid-carousel";
import PistaBurfi from "../../Assets/PistaBurfi.png";
import Rasgulla from "../../Assets/Rasgulla.png";
import MotichurLaddu from "../../Assets/MotichurLaddu.png";
import MalaiBarfi from "../../Assets/MalaiBarfi.png";
import Kalakand from "../../Assets/Kalakand.png";
import GajarHalwa from "../../Assets/GajarHalwa.png";
import KajuBurfi from "../../Assets/KajuBurfi.png";
import Balushahi from "../../Assets/Balushahi.png";
import rasmalai from "../../Assets/rasmalai.png";
import Viewmore from "../../Assets/Icons/ph_arrow-circle-right.svg";
import { useNavigate } from "react-router-dom";

const Dishes = [
  {
    id: 1,
    img: PistaBurfi,
    name: "Pista Burfi",
    price: "CA$ 12.99"
  },
  {
    id: 2,
    img: KajuBurfi,
    name: "Kaju Barfi",
    price: "$15.99"
  },
  {
    id: 3,
    img: MalaiBarfi,
    name: "Malai Barfi",
    price: "$15.99"
  },
  {
    id: 4,
    img: Rasgulla,
    name: "Small Angoori Rasgulla pink",
    price: "$11.99"
  },
  {
    id: 5,
    img: Kalakand,
    name: "Kalakand",
    price: "$13.99"
  },
  {
    id: 6,
    img: GajarHalwa,
    name: "Gajar Halwa",
    price: "$13.99"
  },
  {
    id: 7,
    img: Balushahi,
    name: "Balushahi",
    price: "$10.29"
  },
  {
    id: 8,
    img: MotichurLaddu,
    name: "Motichoor Ladoo",
    price: "$11.99"
  }
];

const Sweets = () => {
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
          gap: "20px"
        }}
        justifyContent={{ xs: "center", sm: "" }}
      >
        {Dishes.map((item) => (
          <Card
            sx={{
              width: { xs: "100%", sm: "260px" },
              height: { xs: "100%", sm: "260px" },
              position: "relative",
              borderRadius: "10px",
              overflow: "visible",
              mt: { xs: 10, sm: 10 }
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: -60,
                zIndex: 2
              }}
            >
              <img src={item.img} alt="receipe" />
            </Box>

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
                  borderRadius: "50px",
                  fontFamily: "Chivo",
                  fontSize: "18px",
                  fontWeight: "600",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
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
                  fontSize: "22px",
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
          More Receipes
        </Typography>
        <img src={Viewmore} alt="view more" />
      </Stack>
    </Stack>
  );
};

export default Sweets;
