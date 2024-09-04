import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const milkshakes = [
  {
    id: 1,
    item: "Mango Tango Shake",
    price: "CA$ 6.99",
    desc: ""
  },
  {
    id: 2,
    item: "Creamy Cookiee Fantasy",
    price: "CA$ 6.99",
    desc: ""
  },
  {
    id: 3,
    item: "Choco Wave Bliss",
    price: "CA$ 6.99",
    desc: ""
  },
  {
    id: 4,
    item: "Kat's Creamy Crunch",
    price: "CA$ 7.99",
    desc: ""
  },
  {
    id: 5,
    item: "Choco Mint Delight",
    price: "CA$ 7.99",
    desc: ""
  },
  {
    id: 6,
    item: "Golden Almond Bliss",
    price: "CA$ 8.99",
    desc: ""
  },
  {
    id: 7,
    item: "Oreolicious Delight Shake",
    price: "CA$ 8.99",
    desc: ""
  },
  {
    id: 8,
    item: "Rabdi Kulfi Shake",
    price: "CA$ 8.99",
    desc: ""
  },
  {
    id: 9,
    item: "Basmati Special Shake",
    price: "CA$ 9.99",
    desc: ""
  }
];

const MilkShakesMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        my: 5
      }}
    >
      {milkshakes.map((item) => (
        <Box
          id={item.id}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2
          }}
        >
          <Stack
            sx={{
              width: { xs: "55%", sm: "28%" }
            }}
          >
            <Typography
              sx={{
                fontFamily: "Chivo",
                fontSize: { xs: "16px", sm: "24px" },
                color: "#492B29",
                minWidth: { xs: "120px", sm: "250px" },
                width: { xs: "120px", sm: "220px" },
                fontWeight: 500
              }}
            >
              {item.item}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Chivo",
                fontSize: { xs: "14px", sm: "18px" }
              }}
            >
              {item.desc}
            </Typography>
          </Stack>
          <hr className="menuList" />
          <Typography
            sx={{
              fontFamily: "Chivo",
              fontSize: { xs: "16px", sm: "24px" },
              color: "#492B29",
              fontWeight: 600
            }}
          >
            {item.price}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default MilkShakesMenu;
