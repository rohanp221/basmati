import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const biryanisVeg = [
  {
    id: 1,
    item: "Paneer 65 Biryani",
    price: "CA$ 13.99",
    desc: "It is a delicious vegetarian layered dish of paneer, dum cooked with spices, herbs and basmati rice."
  },
  {
    id: 2,
    item: "Paneer Tikka Biryani",
    price: "CA$ 13.99",
    desc: "A super satisfying vegetarian meal with aromatic fluffy basmati rice, and pillowy soft chunks of flavorful paneer marinated in warming spices."
  }
];

const biryaniesNonVeg = [
  {
    id: 1,
    item: "Egg Dum Biryani",
    price: "CA$ 13.99",
    desc: "Fragrant long grain basmati rice and spiced hard boiled eggs topped with caramelized onions."
  },
  {
    id: 2,
    item: "Hyderabad Chicken Dum Biryani",
    price: "CA$ 13.99",
    desc: "Popular hyderabadi delicacy dish made with overnight marinated meat cooked in layers with basmati rice flavored with exotic & aromatic spices."
  },
  {
    id: 3,
    item: "Chicken 65 Biryani",
    price: "CA$ 14.99",
    desc: "Hyderabadi Boneless Chicken 65 Biryani is a flavorful, spicy,aromatic biryani with a twist where cooked rice is layered with fried boneless."
  },
  {
    id: 4,
    item: "Chicken Tikka Biryani",
    price: "CA$ 14.99",
    desc: "Chicken tikka made with authentic barbeque spices well mixed with dum biryani rice."
  },
  {
    id: 5,
    item: "Butter Chicken Biryani",
    price: "CA$ 14.99",
    desc: "Chicken marinated in yogurt and spices. Cooked in the tomato puree and cream well mixed with dum biryani rice."
  },
  {
    id: 6,
    item: "Ghee Roast Kaju Chicken Biryani",
    price: "CA$ 14.99",
    desc: "Flavorfull Basmati rice cooked with chicken, Spices, Ghee, Mint, Coriander and cashews."
  },
  {
    id: 7,
    item: "Gongura Chicken Biryani",
    price: "CA$ 14.99",
    desc: "Biryani made by mixing chicken and gongura in gravy immersed basmati rice."
  },
  {
    id: 8,
    item: "Hyderabad Mutton Dum Biryani",
    price: "CA$ 15.99",
    desc: "Mutton marinated with spices overnight and cooked on dum-steaming over slow fire between layers of spices up and fragrant basmati rice."
  },
  {
    id: 9,
    item: "Ghee Roast Mutton Biryani",
    price: "CA$ 15.99",
    desc: "Flavorful basmati rice cooked with curried meat, spices, ghee, mint, coriander and cashews."
  },

  {
    id: 10,
    item: "Gongura Mutton Biryani",
    price: "CA$ 15.99",
    desc: "Biryani made by mixing mutton and gongura in gravy immersed basmati rice."
  }
];

const BiryaniMenu = () => {
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
      {biryanisVeg.map((item) => (
        <Box
          key={item.id}
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
      {biryaniesNonVeg.map((item) => (
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

export default BiryaniMenu;
