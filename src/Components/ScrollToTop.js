import { Box } from "@mui/material";
import React from "react";

const ScrollToTop = () => {
  return (
    <React.Fragment>
      <Box
        data-aos="fade-up"
        data-aos-duration="1500"
        sx={{
          width: "40px",
          height: "40px",
          borderRadius: "5px",
          background: "#492B29",
          position: "fixed",
          zIndex: 100,
          color: "#fff",
          display: { sm: "flex", xs: "none" },
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          bottom: "5%",
          right: "5%",
        }}
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <i className="fa-solid fa-chevron-up" />
      </Box>
      {/* <Button
        data-aos="fade-up"
        data-aos-duration="1500"
        variant="contained"
        sx={{
          backgroundColor: "#492B29",
          width: "100%",
          color: "#fff",
          border: "1px solid #492B29 ",
          borderRadius: "0px 0px 25px 25px",
          p: "15px 30px",
          textTransform: "capitalize",
          fontFamily: "Chivo",
          fontSize: "18px",
          "&:hover": {
            background: "#492B29",
          },
          position: "fixed",
          left: 0,
          bottom: 0,
          zIndex: 1000,
          display: { sm: "none", xs: "block" },
        }}
      >
        Order Now
      </Button> */}
    </React.Fragment>
  );
};

export default ScrollToTop;
