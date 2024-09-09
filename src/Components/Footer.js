/* eslint-disable jsx-a11y/anchor-has-content */
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { FaFacebookF } from "react-icons/fa";

import Footershape from "../Assets/footer.png";
import basmatilogo from "../Assets/basmatilogo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import location from "../Assets/Icons/location.svg";
import envelope from "../Assets/Icons/envelope.svg";
import calling from "../Assets/Icons/calling.svg";
import dinein from "../Assets/Icons/dinein.svg";
import catering from "../Assets/Icons/catering.svg";
import takeaway from "../Assets/Icons/take-away.svg";
import orders from "../Assets/Icons/onlineOrders.svg";

const services = [
  {
    id: 1,
    type: "Dine-In",
    icon: dinein
  },
  {
    id: 2,
    type: "Catering",
    icon: catering
  },
  {
    id: 3,
    type: "Take Away",
    icon: takeaway
  },
  {
    id: 4,
    type: "Online Orders",
    icon: orders
  }
];

const Footer = () => {
  var date = new Date();
  var yyyy = date.getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: "#EAAB2A",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: "100%",
        position: "relative",
        mt: 15
      }}
      id="contact"
    >
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          top: -2
        }}
      >
        <img src={Footershape} alt="" width="100%" />
      </Box>
      <Container
        sx={{
          pb: 5,
          pt: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            width: { xs: "40%", sm: "250px" },
            margin: "0 auto"
          }}
        >
          <img src={basmatilogo} alt="logo" width="100%" />
        </Box>
        <>
          <Typography
            align="center"
            sx={{
              fontFamily: "Merienda",
              fontSize: { xs: "28px", sm: "32px" },
              fontWeight: "700",
              color: "#492B29",
              mt: 3
            }}
          >
            Our Services
          </Typography>
          <Box
            sx={{
              display: "grid",
              width: { xs: "80%", sm: "70%" },
              gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr 1fr" },
              alignItems: "center",
              margin: "40px auto 60px auto"
            }}
          >
            {services.map((service) => (
              <Stack
                direction="column"
                key={service.id}
                alignItems="center"
                sx={{
                  py: 2
                }}
              >
                <Box>
                  <img src={service.icon} alt="icon" />
                </Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "Chivo",
                    color: "#492B29",
                    mt: 2
                  }}
                >
                  {service.type}
                </Typography>
              </Stack>
            ))}
          </Box>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent={{ xs: "space-around", sm: "space-between" }}
            sx={{
              width: { xs: "100%", sm: "75%" },
              margin: "auto",
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 2, sm: 0 }
            }}
          >
            <Stack
              spacing={1}
              alignItems="center"
              justifyContent="center"
              direction="row"
            >
              <Box
                sx={{
                  width: { xs: "20px", sm: "28px" },
                  height: { xs: "20px", sm: "28px" }
                }}
              >
                <img src={calling} alt="contact" width="100%" height="100%" />
              </Box>
              <Typography
                align="center"
                sx={{
                  fontFamily: "Chivo",
                  fontSize: { xs: "0.9rem", sm: "1.1rem" },
                  color: "#fff"
                }}
              >
                +1 905-556-1609
              </Typography>
            </Stack>
            <Stack
              spacing={1}
              alignItems="center"
              justifyContent="center"
              direction="row"
            >
              <Box
                sx={{
                  width: { xs: "20px", sm: "28px" },
                  height: { xs: "20px", sm: "28px" }
                }}
              >
                <img src={location} alt="contact" width="100%" height="100%" />
              </Box>
              <Typography
                align="center"
                sx={{
                  fontFamily: "Chivo",
                  fontSize: { xs: "0.9rem", sm: "1.1rem" },
                  color: "#fff"
                }}
              >
                965 Dundas St W #A8 <br /> Whitby, ON L1P 1G8
              </Typography>
            </Stack>
            <Stack
              spacing={1}
              alignItems="center"
              justifyContent="center"
              direction="row"
            >
              <Box
                sx={{
                  width: { xs: "20px", sm: "28px" },
                  height: { xs: "20px", sm: "28px" }
                }}
              >
                <img src={envelope} alt="contact" width="100%" height="100%" />
              </Box>
              <Typography
                align="center"
                sx={{
                  fontFamily: "Chivo",
                  fontSize: { xs: "0.9rem", sm: "1.1rem" },
                  color: "#fff"
                }}
              >
                info@basmatiindiancuisine.ca
              </Typography>
            </Stack>
          </Stack>
          <hr className="footer" />
        </>
        <Typography
          align="center"
          sx={{
            fontFamily: "Chivo",
            fontSize: { xs: "0.9rem", sm: "1.1rem" },
            color: "#fff"
          }}
        >
          Copyright © <>{yyyy}</>. All Rights Reserved By Basmati | Designed &
          Developed by{" "}
          <a
            href="https://www.wielabs.com/"
            target="_blank"
            rel="noreferrer"
            className="wielabs"
          >
            Wielabs
          </a>
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          justifyContent="flex-end"
        ></Stack>
      </Container>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ pb: 2, mr: { xs: 0, sm: 20 } }}
        justifyContent={{ xs: "center", sm: "flex-end" }}
      >
        <Typography
          sx={{
            fontFamily: "Chivo",
            fontSize: "1.2rem",
            fontWeight: "600",
            color: "#fff"
          }}
        >
          Follow us:
        </Typography>
        <a
          href="https://www.facebook.com/basmati.indiancuisinee/"
          alt="facebook"
          target="_blank"
          rel="noreferror noreferrer"
        >
          <Box
            sx={{
              width: "40px",
              height: "40px",
              border: "1px solid #fff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              ":hover": {
                transform: "scale(1.2)",
                transitionDuration: "0.5s"
              }
            }}
          >
            <FaFacebookF style={{ color: "#fff" }} />
          </Box>
        </a>

        <a
          href="https://www.instagram.com/basmati.ca/?igshid=YmMyMTA2M2Y%3D"
          alt="instagram"
          target="_blank"
          rel="noreferrer"
        >
          <Box
            sx={{
              width: "40px",
              height: "40px",
              border: "1px solid #fff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              ":hover": {
                transform: "scale(1.2)",
                transitionDuration: "0.5s"
              }
            }}
          >
            <InstagramIcon sx={{ color: "#fff", fontSize: "18px" }} />
          </Box>
        </a>
      </Stack>
    </Box>
  );
};

export default Footer;
