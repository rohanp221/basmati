import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const beverages = [
  {
    id: 1,
    item: "Bottled Water",
    price: "CA$ 0.99",
    desc: ""
  },
  {
    id: 2,
    item: "Soft Drinks (Coke, Pepsi, Canada Dry, Sprite)",
    price: "CA$ 1.99",
    desc: ""
  },
  {
    id: 3,
    item: "ThumbsUp",
    price: "CA$ 2.99",
    desc: ""
  },
  {
    id: 4,
    item: "Coke 500 ML",
    price: "CA$ 2.99",
    desc: ""
  },
  {
    id: 5,
    item: "Diet Coke 500 ML",
    price: "CA$ 2.99",
    desc: ""
  },
  {
    id: 6,
    item: "Tropical Delight Mango Juice",
    price: "CA$ 3.99",
    desc: ""
  },
  {
    id: 7,
    item: "Butter Milk",
    price: "CA$ 3.99",
    desc: ""
  },
  {
    id: 8,
    item: "Masala Tea",
    price: "CA$ 2.00",
    desc: ""
  },
  {
    id: 9,
    item: "Honey Lemon Mint Tea",
    price: "CA$ 2.99",
    desc: ""
  },
  {
    id: 10,
    item: "Bru Coffee",
    price: "CA$ 2.99",
    desc: ""
  }
];

const BeveragesMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        my: 5
      }}
    >
      {beverages.map((item) => (
        <Box
          id={item.id}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2
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

export default BeveragesMenu;
