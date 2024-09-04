import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const soupsVeg = [
  {
    id: 1,
    item: "Veg Soup",
    price: " CA$ 4.99",
    desc: "Blend of diced onions, carrots, tomatoes, beans and vegetable broth ",
  },
  {
    id: 2,
    item: "Tomato Soup",
    price: " CA$ 4.99",
    desc: "Mixture of onions, tomatoes, bay leaves and green chillies.",
  },
];

const soupsNonveg = [
  {
    id: 1,
    item: "Chicken Soup",
    price: "CA$ 5.99",
    desc: "Combination of chicken, onions, bell peppers, tomatoes and chicken broth.",
  },
];

const SoupsMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Stack direction='row' spacing={1} alignItems='center'>
        <Box
          sx={{
            width: "15px",
            height: "15px",
            border: "solid 2px #45CB85",
            padding: "5px",
            background: "#45CB85 content-box",
            borderRadius: "50%",
          }}
        ></Box>
        <Typography
          sx={{
            fontFamily: "Chivo",
            color: "#45CB85",
            fontSize: { xs: "18px", sm: "28px" },
            fontWeight: 600,
            mb: { xs: 1, sm: 2 },
          }}
        >
          VEG
        </Typography>
      </Stack>
      {soupsVeg.map((item) => (
        <Box
          id={item.id}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Stack
            sx={{
              width: { xs: "55%", sm: "28%" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Chivo",
                fontSize: { xs: "16px", sm: "24px" },
                color: "#492B29",
                minWidth: { xs: "120px", sm: "250px" },
                width: { xs: "120px", sm: "220px" },
                fontWeight: 500,
              }}
            >
              {item.item}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Chivo",
                fontSize: { xs: "14px", sm: "18px" },
              }}
            >
              {item.desc}
            </Typography>
          </Stack>
          <hr className='menuList' />
          <Typography
            sx={{
              fontFamily: "Chivo",
              fontSize: { xs: "16px", sm: "24px" },
              color: "#492B29",
              fontWeight: 600,
            }}
          >
            {item.price}
          </Typography>
        </Box>
      ))}
      <Stack direction='row' spacing={1} alignItems='center'>
        <Box
          sx={{
            width: "15px",
            height: "15px",
            border: "solid 2px #E85A2C",
            padding: "5px",
            background: "#E85A2C content-box",
            borderRadius: "50%",
          }}
        ></Box>
        <Typography
          sx={{
            fontFamily: "Chivo",
            color: "#E85A2C",
            fontSize: { xs: "18px", sm: "28px" },
            fontWeight: 600,
            mb: 2,
          }}
        >
          NON VEG
        </Typography>
      </Stack>
      {soupsNonveg.map((item) => (
        <Box
          id={item.id}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Stack
            sx={{
              width: { xs: "55%", sm: "28%" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Chivo",
                fontSize: { xs: "16px", sm: "24px" },
                color: "#492B29",
                minWidth: { xs: "120px", sm: "250px" },
                width: { xs: "120px", sm: "220px" },
                fontWeight: 500,
              }}
            >
              {item.item}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Chivo",
                fontSize: { xs: "14px", sm: "18px" },
              }}
            >
              {item.desc}
            </Typography>
          </Stack>
          <hr className='menuList' />
          <Typography
            sx={{
              fontFamily: "Chivo",
              fontSize: { xs: "16px", sm: "24px" },
              color: "#492B29",
              fontWeight: 600,
            }}
          >
            {item.price}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SoupsMenu;
