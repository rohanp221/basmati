import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const sweetsmenu = [
  {
    id: 1,
    item: "Pista Burfi (1 LB)",
    price: "CA$ 12.99",
    desc: ""
  },
  {
    id: 2,
    item: "Kaju Barfi (1 LB)",
    price: "CA$ 15.99",
    desc: ""
  },
  {
    id: 3,
    item: "Malai Barfi (1 LB)",
    price: "CA$ 12.99",
    desc: ""
  },
  {
    id: 4,
    item: "Gulab Jamun long (1 LB)",
    price: "CA$ 9.99",
    desc: ""
  },
  {
    id: 5,
    item: "Gulab Jamun Cut Filled (1 LB)",
    price: "CA$ 10.99",
    desc: ""
  },
  {
    id: 6,
    item: "Small Angoori Rasgulla pink (1 LB)",
    price: "CA$ 11.99",
    desc: ""
  },
  {
    id: 7,
    item: "Rasmalai (1 LB)",
    price: "CA$ 11.99",
    desc: ""
  },
  {
    id: 8,
    item: "Kalakand (1 LB)",
    price: "CA$ 13.99",
    desc: ""
  },
  {
    id: 9,
    item: "Gajar Halwa (1 LB)",
    price: "CA$ 13.99",
    desc: ""
  },
  {
    id: 10,
    item: "Balushahi (1 LB)",
    price: "CA$ 10.29",
    desc: ""
  },
  {
    id: 11,
    item: "Pattisa (1 LB)",
    price: "CA$ 11.99",
    desc: ""
  },
  {
    id: 12,
    item: "Jalebi (1 LB)",
    price: "CA$ 9.99",
    desc: ""
  },
  {
    id: 13,
    item: "Motichoor Ladoo (1 LB)",
    price: "CA$ 11.99",
    desc: ""
  },
  {
    id: 14,
    item: "Yellow Ladoo (1 LB)",
    price: "CA$ 12.99",
    desc: ""
  },
  {
    id: 15,
    item: "Pan Gulkand Roll (1 LB)",
    price: "CA$ 15.99",
    desc: ""
  },
  {
    id: 16,
    item: "Kaju Pista Roll (1 LB)",
    price: "CA$ 14.99",
    desc: ""
  },
  {
    id: 17,
    item: "Malai Peda (1 LB)",
    price: "CA$ 13.99",
    desc: ""
  },
  {
    id: 18,
    item: "Small Gulab Jamun (1 LB)",
    price: "CA$ 9.99",
    desc: ""
  },
  {
    id: 19,
    item: "Milk Cake (1 Box)",
    price: "CA$ 6.99",
    desc: ""
  }
];

const SweeteMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        my: 5
      }}
    >
      {sweetsmenu.map((item) => (
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

export default SweeteMenu;
