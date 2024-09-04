import { Box, Rating, Stack, Typography } from "@mui/material";
import React from "react";

const Reviewcomponent = ({ item }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: { xs: 300, sm: 600 },
        width: { xs: 300, sm: 600 },
        borderRadius: "50%",
        color: "#fff",
        position: "relative",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "200px", sm: "400px" },
        }}
        direction="column"
        spacing={{ xs: 1, sm: 3 }}
      >
        <Box
          sx={{
            width: { xs: "60px", sm: "120px" },
            height: { xs: "60px", sm: "120px" },
            alignSelf: "center",
          }}
        >
          <img src={item.img} alt="profile pic" width="100%" />
        </Box>
        <Rating
          readOnly
          value={item.rating}
          style={{
            alignSelf: "center",
          }}
        />
        <Typography
          sx={{
            fontFamily: "Josefin Sans",
            fontSize: { xs: "12px", sm: "20px" },
            lineHeight: { xs: "14px", sm: "23px" },
          }}
          align="center"
        >
          {item.comment}
        </Typography>
        <Box
          sx={{
            p: { xs: "10px 25px", sm: "20px 50px" },
            backgroundColor: "#EAAB2A",
            borderRadius: "50px",
            alignSelf: "center",
            fontFamily: "Josefin Sans",
            fontSize: { xs: "0.6rem", sm: "1.5rem" },
            fontWeight: "600",
          }}
        >
          {item.name}
        </Box>
      </Stack>
    </Box>
  );
};

export default Reviewcomponent;
