import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Dots from "../../Assets/round-dot-shape.png";
import BackgroundImage from "../../Assets/section5bgimg.png";
import Bigcircle from "../../Assets/big-circle.png";
import Smallcircle from "../../Assets/small-circle.png";
import Reviewcomponent from "../Reviewcomponent";
import reviews from "../reviews";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const Fourthsection = () => {
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          width: "40px",
          height: "40px",
          borderRadius: "5px",
          backgroundColor: "#E85A2C",
          color: "#fff",
          position: "absolute",
          top: "50%",
          right: "-20px",
          transform: "translateY(-50%)",
          zIndex: "100",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <i class="fa-solid fa-chevron-right" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          width: "40px",
          height: "40px",
          borderRadius: "5px",
          backgroundColor: "#E85A2C",
          color: "#fff",
          position: "absolute",
          top: "50%",
          left: "-20px",
          transform: "translateY(-50%)",
          zIndex: "100",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <i class="fa-solid fa-chevron-left" />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2800,
    autoplaySpeed: 800,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        my: { xs: 4, sm: 8, md: 20 },
      }}
    >
      <Box
        sx={{
          width: { md: "95%", lg: "80%" },
          margin: "auto",
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
          },
          gap: { xs: "20px", sm: "100px" },
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            position: "absolute",
            top: "-5%",
            left: { md: "25%", lg: "18%" },
            zIndex: -1,
          }}
        >
          <img src={Bigcircle} alt="big circle" />
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            position: "absolute",
            bottom: 0,
            left: { md: "2%", lg: "2%" },
            zIndex: -1,
          }}
        >
          <img src={Smallcircle} alt="small circle" />
        </Box>
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            width: { xs: 300, sm: 600 },
            height: { xs: 300, sm: 600 },
          }}
        >
          <Slider {...settings}>
            {reviews.map((item) => (
              <Reviewcomponent item={item} />
            ))}
          </Slider>
        </Box>

        <Stack
          direction="column"
          justifyContent={{ xs: "center", sm: "flex-start" }}
          spacing={{ xs: 2, sm: 4 }}
          sx={{
            width: { xs: "100%", sm: "50%" },
            my: { xs: 5, sm: 5, md: 0 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Chivo",
              fontSize: { xs: "20px", sm: "20px", md: "2rem" },
              fontWeight: "600",
              color: "#91999F",
            }}
          >
            TESTIMONIALS
          </Typography>
          <Typography
            align="center"
            sx={{
              fontFamily: "Merienda",
              fontSize: { xs: "24px", sm: "34px", md: "3.5rem" },
              fontWeight: "700",
              color: "#1D232C",
            }}
          >
            What Our <br />
            Clients Say
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          height: { xs: "350px", sm: "500px" },
          mt: { xs: 10, sm: 20 },
          position: "relative",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            py: { xs: 0, sm: 20, md: 20, lg: 0, xl: 0 },
          }}
        >
          <Box
            sx={{
              width: "500px",
              height: "100%",
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
            }}
          >
            <img src={Dots} alt="dots" height="100%" width="100%" />
          </Box>
          <Typography
            data-aos="fade-up"
            data-aos-duration="1500"
            sx={{
              fontFamily: "Merienda",
              fontSize: {
                xs: "1.7rem",
                sm: "30px",
                md: "30px",
                lg: "35px",
                xl: "50px",
              },
              color: "#fff",
              fontWeight: 600,
              py: { xs: 8, sm: 0 },
              px: { xs: 0, sm: 3, md: 0 },
              ml: { xs: 0, sm: "60px", lg: "20px" },
            }}
          >
            Treat Your Pallet with <br /> our <span>Amazing Menu</span>
          </Typography>
          <Button
            data-aos="fade-left"
            data-aos-duration="1500"
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "25px",
              p: "18px 30px",
              height: "50px",
              width: "160px",
              margin: { xs: "0px 30px", sm: "0px 100px" },
              "&:hover": {
                background: "#fff",
              },
            }}
            onClick={() => {
              navigate("/menu");
              window.scrollTo(0, 0);
            }}
          >
            view more
          </Button>
        </Stack>
        <Box
          sx={{
            width: { xs: "25%", sm: "430px" },
            height: { xs: "50%", sm: "90%" },
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "50%",
            position: "absolute",
            top: { xs: "5%", sm: "8%" },
            left: { xs: "1%", sm: "1%" },
            justifyContent: "center",
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Merienda",
              width: "150px",
              fontSize: "2rem",
              fontWeight: 700,
              margin: { xs: "25% auto", sm: "35% auto" },
            }}
            align="center"
          >
            Our Signature Range
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Fourthsection;
