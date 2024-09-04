import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const tandoorimenu = [
  {
    id: 1,
    item: "Paneer Tikka",
    price: "CA$ 14.99",
    desc: "Cottage Cheese cubes & onions marinated in a spicy sauce."
  },
  {
    id: 2,
    item: "Chicken Tikka",
    price: "CA$ 15.99",
    desc: "Chicken and onions marinated in a spicy tikka sauce."
  },
  {
    id: 3,
    item: "Malai Chicken Tikka",
    price: "CA$ 15.99",
    desc: "Boneless chicken breast, marinated in our chef's secret creamy garlic sauce."
  },
  {
    id: 4,
    item: "Haryali Chicken Tikka",
    price: "CA$ 15.99",
    desc: "Chicken breast marinated with spices & yogurt and grilled in our clay oven."
  },
  {
    id: 5,
    item: "Tandoori Chicken Full(8 Pieces)",
    price: "CA$ 21.99",
    desc: "8 pcs Grilled bone-in chicken marinated in yogurt, garlic, ginger & fresh ground spices."
  },
  {
    id: 6,
    item: "Tandoori Chicken Half(4 Pices)",
    price: "CA$ 15.99",
    desc: "4 pcs Grilled bone-in chicken marinated in yogurt, garlic, ginger & fresh ground spices."
  },
  {
    id: 7,
    item: "Tandoori Mix Platter",
    price: "CA$ 23.99",
    desc: "Paneer and chicken marinated in a spicy and tangy tandoori sauce marinated and then grilled to perfection."
  }
];

const TandooriPlatter = () => {
  return (
    <Box
      sx={{
        width: "100%",
        my: 5
      }}
    >
      {tandoorimenu.map((item) => (
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

export default TandooriPlatter;
