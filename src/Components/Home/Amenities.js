import { Typography, Box } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import Parking from "../../Assets/Icons/parking.png";
import Wifi from "../../Assets/Icons/freewifi.png";
import Music from "../../Assets/Icons/music.png";
import Halal from "../../Assets/halalsticker.png";

const timings = [
  { day: "Monday", opening: "12:00 PM", closing: "12:00 AM" },
  { day: "Tuesday", opening: "4:00 PM", closing: "12:00 AM" },
  { day: "Wednesday", opening: "12:00 PM", closing: "12:00 AM" },
  { day: "Thursday", opening: "12:00 PM", closing: "12:00 AM" },
  { day: "Friday", opening: "12:00 PM", closing: "12:00 AM" },
  { day: "Saturday", opening: "12:00 PM", closing: "12:00 AM" },
  { day: "Sunday", opening: "12:00 PM", closing: "12:00 AM" }
];

const Amenities = () => {
  return (
    <>
      <Container
        data-aos="fade-up"
        data-aos-duration="1500"
        sx={{
          my: 10
        }}
      >
        <Typography
          align="center"
          sx={{
            fontFamily: "Chivo",
            fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.8rem" },
            fontWeight: 600
          }}
        >
          AMENITIES
        </Typography>
        <Typography
          align="center"
          sx={{
            fontFamily: "Merienda",
            fontSize: { xs: "1.6rem", sm: "3.4rem", md: "3.8rem" },
            fontWeight: 600,
            color: "#1D232C"
          }}
        >
          Make Plans To Visit Us
        </Typography>
        <Stack
          direction="row"
          justifyContent={{
            xs: "center",
            sm: "space-evenly"
          }}
          sx={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          <Box
            sx={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              my: 2,
              width: { xs: "95%", sm: "360px" },
              height: { xs: "210px", sm: "290px" },
              display: "grid",
              placeItems: "center"
            }}
          >
            <Stack spacing={3}>
              <Box
                sx={{
                  width: { xs: "230px", sm: "290px" }
                }}
              >
                <img src={Parking} alt="parking" width="100%" />
              </Box>
              <Typography
                align="center"
                sx={{
                  fontFamily: "Chivo",
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  fontWeight: "600"
                }}
              >
                Parking Available
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              my: 2,
              width: { xs: "95%", sm: "360px" },
              height: { xs: "210px", sm: "290px" },
              display: "grid",
              placeItems: "center"
            }}
          >
            <Stack spacing={3}>
              <img src={Wifi} alt="wifi" width="165px" aspectRatio="1.2" />
              <Typography
                align="center"
                sx={{
                  fontFamily: "Chivo",
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  fontWeight: "600"
                }}
              >
                Wifi
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              width: { xs: "95%", sm: "360px" },
              height: { xs: "210px", sm: "290px" },
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              my: 2,
              display: "grid",
              placeItems: "center"
            }}
          >
            <Stack spacing={3}>
              <img src={Music} alt="music" width="113px" aspectRatio="0.9" />
              <Typography
                align="center"
                sx={{
                  fontFamily: "Chivo",
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  fontWeight: "600"
                }}
              >
                Music
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#492B29",
          color: "#fff",
          margin: "50px 0px",
          padding: { xs: "40px 0px", sm: "120px 0px" },
          position: "relative"
        }}
      >
        <Box
          sx={{
            width: { xs: "100px", sm: "100px", md: "200px" },
            height: { xs: "100px", sm: "100px", md: "200px" },
            position: "absolute",
            top: { xs: "2%", sm: "3%" },
            left: { xs: "3%", sm: "3%" },
            filter: "drop-shadow(4px 12px 10px rgba(0, 0, 0, 0.1))"
          }}
        >
          <img src={Halal} alt="halallogo" width="100%" height="100%" />
        </Box>
        <Typography
          align="center"
          sx={{
            fontSize: "26px",
            fontFamily: "Chivo",
            fontWeight: 600
          }}
        >
          Daily
        </Typography>
        <Typography
          align="center"
          sx={{
            fontFamily: "Chivo",
            fontWeight: 600,
            fontSize: { xs: "26px", sm: "60px" }
          }}
        >
          Opening Hours
        </Typography>
        <Box
          sx={{
            width: { xs: "280px", sm: "330px" },
            margin: "20px auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            borderRadius: "8px",
            border: "1px solid #F4AD31",
            padding: { xs: "30px 15px", sm: "45px 35px" }
          }}
        >
          {timings.map((time, index) => (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
              key={index}
            >
              <Typography
                align="center"
                sx={{
                  fontFamily: "Chivo",
                  fontSize: { xs: "16px", sm: "18px" },
                  color: "#F4AD31"
                }}
              >
                {time.day}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Chivo",
                  fontSize: { xs: "16px", sm: "18px" },
                  fontWeight: 600
                }}
              >
                {time.opening} - {time.closing}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Amenities;
