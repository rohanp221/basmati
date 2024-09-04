import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const snacks = [
  {
    id: 1,
    item: "Veg Punjabi Samosa (1 Pcs)",
    price: "CA$ 1.99",
    desc: ""
  },
  {
    id: 2,
    item: "Small Veg Samosa (1 Pcs)",
    price: "CA$ 0.75",
    desc: ""
  },
  {
    id: 3,
    item: "Jalepeno Corn Cheese Samosa (1 Pcs)",
    price: "CA$ 1.50",
    desc: ""
  },
  {
    id: 4,
    item: "Chicken Samosa (1 Pcs)",
    price: "CA$ 1.50",
    desc: ""
  },
  {
    id: 5,
    item: "Veg Spring Roll (1 Pcs)",
    price: "CA$ 0.50",
    desc: ""
  },
  {
    id: 6,
    item: "Chicken Spring Roll (1 Pcs)",
    price: "CA$ 1.25",
    desc: ""
  },
  {
    id: 7,
    item: "Mutton Spring Roll (1 Pcs)",
    price: "CA$ 1.50",
    desc: ""
  },
  {
    id: 8,
    item: "Osmania Cokkiee (1 Pcs)",
    price: "CA$ 0.50",
    desc: ""
  }
];

const SnacksMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        my: 5
      }}
    >
      {snacks.map((item) => (
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

export default SnacksMenu;
