import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const indoChineseVeg = [
  {
    id: 1,
    item: "Veg Hakka Noodles",
    price: "CA$ 11.99",
    desc: "Hakka Noodles are prepared with noodles, lots of veggies, and minimal sauces"
  },
  {
    id: 2,
    item: "Veg Fried Rice",
    price: "CA$ 11.99",
    desc: "Recipe is made with a hearty mix of fresh vegetables, green onions, seasonings and spices."
  }
];

const indoChineseNonVeg = [
  {
    id: 1,
    item: "Egg Hakka Noodles",
    price: "CA$ 12.99",
    desc: "Egg Hakka Noodles, is a popular Indo-Chinese dish with scrambled eggs and vegetables."
  },
  {
    id: 2,
    item: "Egg Fried Rice",
    price: "CA$ 12.99",
    desc: "Stir-fry rice dish that consists of fluffy rice, beaten egg, seasoned with soy sauce, sesame oil, and green onions."
  },
  {
    id: 3,
    item: "Chicken Hakka Noodles",
    price: "CA$ 13.99",
    desc: "Indian street style noodles packed with bold & spicy flavors."
  },
  {
    id: 4,
    item: "Chicken Fried Rice",
    price: "CA$ 13.99",
    desc: "Cooked chicken, rice, soy sauce, and shredded egg stir-fried together."
  }
];

const IndoChineseMenu = () => {
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
      {indoChineseVeg.map((item) => (
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
      {indoChineseNonVeg.map((item) => (
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

export default IndoChineseMenu;
