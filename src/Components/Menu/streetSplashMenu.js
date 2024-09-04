import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const streetsplash = [
  {
    id: 1,
    item: "Regular Vada Pav (1Pcs)",
    price: "CA$ 4.59",
    desc: "A pillowy pav, stuffed with a golden-fried spiced batata (potato) vada, covered with a lick of tamarind and coriander chutneys and a sprinkling of garlicky masala."
  },
  {
    id: 2,
    item: "Butter Vada Pav (1Pcs)",
    price: "CA$ 5.49",
    desc: "Made with homemade butter, covered with a lick of tamarind and coriander chutneys and a sprinkling of garlicky masala."
  },
  {
    id: 3,
    item: "Cheese Vada Pav (1Pcs)",
    price: "CA$ 5.49",
    desc: "Spicy potato filling sandwiched between burger buns, layered with spicy garlic chutney and cheese."
  },
  {
    id: 4,
    item: "Shezwan Vada Pav (1Pcs)",
    price: "CA$ 5.49",
    desc: "Vada Pav made with Shezwan Sauce for a spicy taste."
  },
  {
    id: 5,
    item: "Special Vada Pav (1Pcs)",
    price: "CA$ 5.49",
    desc: "Basmati Special Vada Pav."
  },
  {
    id: 6,
    item: "Dabeli (1Pcs)",
    price: "CA$ 5.49",
    desc: "A pressed sandwich filled with spiced mashed potatoes, chutneys (sweet, mint, and spicy), peanuts, pomegranate, chopped onions, coriander, and shev."
  },
  {
    id: 7,
    item: "Samosa Pav (1Pcs)",
    price: "CA$ 4.59",
    desc: "Vegetable samosa stuffed in butter pav and served hot with chutney."
  },
  {
    id: 8,
    item: "Masala Maggie",
    price: "CA$ 5.99",
    desc: "Maggie (noodles) cooked with Indian spices and served hot."
  },
  {
    id: 9,
    item: "Double Masala Maggie",
    price: "CA$ 6.99",
    desc: "Maggie (noodles) cooked with double masala and served hot."
  },
  {
    id: 10,
    item: "Cheese Masala Maggie",
    price: "CA$ 6.99",
    desc: "Maggie (noodles) cooked with Indian spices topped with mouth-watering cheese."
  }
];

const StreetSplashMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        my: 5
      }}
    >
      {streetsplash.map((item) => (
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

export default StreetSplashMenu;
