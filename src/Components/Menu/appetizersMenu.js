import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const appetizersveg = [
  {
    id: 1,
    item: "Veg Manchuria",
    price: "CA$ 13.99",
    desc: "Veg manchurian is made by tossing fried mixed veg balls in sweet, sour and hot manchurian sauce"
  },
  {
    id: 2,
    item: "Veg 65",
    price: "CA$ 13.99",
    desc: "Cauliflower, mushrooms, potatoes  coated in mild spices, cooked in tangy chinese sauces."
  },
  {
    id: 3,
    item: "Gobi Manchuria",
    price: "CA$ 13.99",
    desc: "Cauliflower coated with flour, fried in oil and sauté in Manchurian sauce"
  },
  {
    id: 4,
    item: "Gobi 65",
    price: "CA$ 13.99",
    desc: "Gobi 65 is a crispy fried snack made with cauliflower, flour, spices & herbs very popular in South Indian"
  },
  {
    id: 5,
    item: "Baby Corn",
    price: "CA$ 13.99",
    desc: "Baby corn coated with flour, fried in oil and sauté in hot and sweet sauces."
  },
  {
    id: 6,
    item: "Paneer 65",
    price: "CA$ 14.99",
    desc: "Paneer sautéed with, onions, capsicum in tomato and chilli sauce "
  },
  {
    id: 7,
    item: "Paneer RRR",
    price: "CA$ 14.99",
    desc: "Deep fried paneer tossed with ginger garlic paste and finally touched up with Indian spices"
  }
];

const appetizersNonveg = [
  {
    id: 1,
    item: "Chicken Manchuria",
    price: "CA$ 14.99",
    desc: "Crispy-coated boneless chicken pieces served in a spicy, tangy brown or red sauce. "
  },
  {
    id: 2,
    item: "Crispy Chicken Pakora",
    price: "CA$ 14.99",
    desc: "Tender chicken marinated in a blend of fragrant spices, then coated in a chickpea flour-based batter for that signature mild nutty taste."
  },
  {
    id: 3,
    item: "Chicken 65 Wet/Dry",
    price: "CA$ 14.99",
    desc: "Chicken 65 is a spicy, deep-fried Indian chicken dish which is served as an appetizer."
  },
  {
    id: 4,
    item: "Vellulli Karam Chicken",
    price: "CA$ 14.99",
    desc: "Prepared with chicken, onions, green chilli, red chilli, coriander, and spices."
  },
  {
    id: 5,
    item: "Chicken RRR",
    price: "CA$ 14.99",
    desc: "Deep-fried chicken cooked in special sauce with cashews."
  },
  {
    id: 6,
    item: "Garlic Chilli Chicken",
    price: "CA$ 14.99",
    desc: "Wok-tossed cubes of deep-fried chicken, coated with tangy chilli sauce."
  },
  {
    id: 7,
    item: "Karivepaku Chicken",
    price: "CA$ 14.99",
    desc: "Marinated chicken is fried with chilli powder, south indian spices, herbs and curry leaf."
  },
  {
    id: 8,
    item: "Dragon Chicken",
    price: "CA$ 14.99",
    desc: "Chicken is fried till crispy and tossed in spicy sauce with dry red chillies and cashews."
  }
];

const AppetizersMenu = () => {
  return (
    <Box
      sx={{
        width: "100%"
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Box
          sx={{
            width: "15px",
            height: "15px",
            border: "solid 2px #45CB85",
            padding: "5px",
            background: "#45CB85 content-box",
            borderRadius: "50%"
          }}
        ></Box>
        <Typography
          sx={{
            fontFamily: "Chivo",
            color: "#45CB85",
            fontSize: { xs: "18px", sm: "28px" },
            fontWeight: 600,
            mb: { xs: 1, sm: 2 }
          }}
        >
          VEG
        </Typography>
      </Stack>
      {appetizersveg.map((item) => (
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
              width: { xs: "50%", sm: "28%" }
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
      <Stack direction="row" spacing={1} alignItems="center">
        <Box
          sx={{
            width: "15px",
            height: "15px",
            border: "solid 2px #E85A2C",
            padding: "5px",
            background: "#E85A2C content-box",
            borderRadius: "50%"
          }}
        ></Box>
        <Typography
          sx={{
            fontFamily: "Chivo",
            color: "#E85A2C",
            fontSize: { xs: "18px", sm: "28px" },
            fontWeight: 600,
            mb: 2
          }}
        >
          NON VEG
        </Typography>
      </Stack>
      {appetizersNonveg.map((item) => (
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
              width: { xs: "50%", sm: "28%" }
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

export default AppetizersMenu;
