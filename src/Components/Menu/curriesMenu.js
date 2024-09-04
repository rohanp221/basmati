import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const curriesVeg = [
  {
    id: 1,
    item: "Dal Makhni",
    price: "CA$ 13.99",
    desc: "Mixed lentil curry generally made with lots of butter and cream"
  },
  {
    id: 2,
    item: "Chana Masala",
    price: "CA$ 13.99",
    desc: "Plump chickpeas bathed in a spicy and tangy tomato onion sauce."
  },
  {
    id: 3,
    item: "Chole Bhature",
    price: "CA$ 13.99",
    desc: "Combination of chana masala and bhatura/puri, a deep-fried bread made from maida"
  },
  {
    id: 4,
    item: "Mixed vegetable Curry",
    price: "CA$ 13.99",
    desc: "Mixture of vegetables together in a traditional Indian onion tomato gravy."
  },
  {
    id: 5,
    item: "Paneer butter Masala",
    price: "CA$ 14.99",
    desc: "Home made cheese cubes cooked with bell-peppers,onions in tomato sauce with a touch of cream."
  },
  {
    id: 6,
    item: "Palak Paneer",
    price: "CA$ 14.99",
    desc: "Homemade Palak Paneer (Cheese Cubes in Creamy Spinach Sauce)  onion, ginger garlic and spinach"
  },
  {
    id: 7,
    item: "Paneer Tikka Masala",
    price: "CA$ 14.99",
    desc: "Pan fry pieces of paneer until golden brown and then bathe them in a rich tomato sauce."
  },
  {
    id: 8,
    item: "Kadai Paneer",
    price: "CA$ 14.99",
    desc: "Kadai Paneer is a popular paneer recipe where paneer and bell peppers are cooked in a spicy masala. It is one of the most popular paneer recipes "
  }
];

const curriesNonveg = [
  {
    id: 1,
    item: "Butter chicken",
    price: "CA$ 14.99",
    desc: "Chicken marinated in yogurt and spices. Cooked in the tomato puree and cream"
  },
  {
    id: 2,
    item: "Chicken Tikka Masala",
    price: "CA$ 14.99",
    desc: "Chicken  cooked in rich fenugreek flavoured tomato gravy with bell peppers and onions."
  },
  {
    id: 3,
    item: "Chilli Chicken Curry",
    price: "CA$ 14.99",
    desc: "Wok-tossed cubes of deep-fried chicken, coated with tangy chilli sauce and cashew gravy."
  },
  {
    id: 4,
    item: "Hyderabad Masala Chicken Curry",
    price: "CA$ 14.99",
    desc: "Nizam-special-dish, with bone in chicken finished with homemade curry sauce."
  },
  {
    id: 5,
    item: "Kadai Chicken",
    price: "CA$ 14.99",
    desc: "chicken cooked with onions, peppers, and spices."
  },
  {
    id: 6,
    item: "Palak Chicken Curry",
    price: "CA$ 14.99",
    desc: "chicken is cooked with onions, tomatoes, spices, herbs and plenty of spinach."
  },
  {
    id: 7,
    item: "Andhra Gongura Chicken Curry",
    price: "CA$ 14.99",
    desc: "Andhra delicacy. Chicken cooked with red sorrel gongura leaves and spices."
  },
  {
    id: 8,
    item: "Andhra Gongura Mutton Curry",
    price: "CA$ 15.99",
    desc: "Andhra delicacy. Mutton cooked with red sorrel gongura leaves and spices."
  },
  {
    id: 9,
    item: "Dam ka Mutton Curry",
    price: "CA$ 15.99",
    desc: "Mutton is cooked with onions, cardamons pods, ginger, garlic, and spices."
  }
];

const CurriesMenu = () => {
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
      {curriesVeg.map((item) => (
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
      {curriesNonveg.map((item) => (
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

export default CurriesMenu;
