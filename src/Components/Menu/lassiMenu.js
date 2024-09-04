import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const lassimenu = [
  {
    id: 1,
    item: "Sweet Lassi",
    price: "CA$ 4.99",
    desc: ""
  },
  {
    id: 2,
    item: "Salted Lassi",
    price: "CA$ 4.99",
    desc: ""
  },
  {
    id: 3,
    item: "Mango Lassi",
    price: "CA$ 5.99",
    desc: ""
  },
  {
    id: 4,
    item: "Special Lassi",
    price: "CA$ 6.99",
    desc: ""
  }
];

const LassiMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        my: 5
      }}
    >
      {lassimenu.map((item) => (
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

export default LassiMenu;
