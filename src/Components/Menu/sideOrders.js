import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const sideorders = [
  {
    id: 1,
    item: "Plain Naan",
    price: "CA$ 1.99",
    desc: "Leavened flatbread. Cooked in a tandoor oven."
  },
  {
    id: 2,
    item: "Butter Naan",
    price: "CA$ 2.99",
    desc: "Buttered, leavened flatbread. Cooked in a tandoor oven."
  },
  {
    id: 3,
    item: "Garlic Naan",
    price: "CA$ 3.49",
    desc: "Leavened flatbread. Cooked with fresh garlic in a tandoor oven."
  },
  {
    id: 4,
    item: "Chilli Naan",
    price: "CA$ 3.49",
    desc: ""
  },
  {
    id: 5,
    item: "Onion Kulcha",
    price: "CA$ 4.99",
    desc: "It's a flatbread made with whole wheat and traditionally cooked in tandoor."
  },
  {
    id: 6,
    item: "Tandoori Roti",
    price: "CA$ 3.99",
    desc: "Whole wheat leavened Indian bread stuffed with onions."
  },
  {
    id: 7,
    item: "Salan",
    price: "CA$ 1.99",
    desc: ""
  },
  {
    id: 8,
    item: "Raita",
    price: "CA$ 1.99",
    desc: ""
  },
  {
    id: 9,
    item: "Plain Onion Salad",
    price: "CA$ 2.99",
    desc: ""
  },
  {
    id: 10,
    item: "Vegetable Salad",
    price: "CA$ 4.99",
    desc: "Onion, Tomato, Cucumber, Carrot, Beetroot(Make note that Vegetables varies according to seasonal)"
  },
  {
    id: 11,
    item: "Plain White Basmati Rice",
    price: "CA$ 4.50",
    desc: "Fried South Asian pastry with a savoury filling, including ingredients such as spiced potatoes, onions, peas."
  }
];

const SideOrders = () => {
  return (
    <Box
      sx={{
        width: "100%",
        my: 5
      }}
    >
      {sideorders.map((item) => (
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

export default SideOrders;
