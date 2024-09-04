import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const chatcornermenu = [
  {
    id: 1,
    item: "Golgappa (8 Pcs)",
    price: "CA$ 6.99",
    desc: "Crisp puffs filled with an assortment of savory, tangy, sweet, crispy toppings and a spicy water."
  },
  {
    id: 2,
    item: "Sev Puri (8 Pcs)",
    price: "CA$ 6.99",
    desc: "Crispy puri is the base for Sev Puri, covered with potatoes, onions, tomatoes, and various chutneys, with Sev as the finishing touch."
  },
  {
    id: 3,
    item: "Bhel Puri",
    price: "CA$ 6.99",
    desc: "A crispy, sweet, tangy, and spicy dish made with puffed rice, onions, tomatoes, and various chutneys."
  },
  {
    id: 4,
    item: "Dahi Puri (8 Pcs)",
    price: "CA$ 7.99",
    desc: "Crispy puri filled with spiced potatoes, chickpeas, and tangy yogurt, drizzled with tamarind and mint chutneys."
  },
  {
    id: 5,
    item: "Papdi Chaat (8 Pcs)",
    price: "CA$ 9.99",
    desc: "Crispy chips are the base of papdi chaat, flavored with yogurt, green and tamarind chutneys, potatoes, onions, and spices."
  },
  {
    id: 6,
    item: "Samosa Chaat (2 Pcs)",
    price: "CA$ 9.99",
    desc: "Samosas are slightly smashed and broken, served with chana and potato ragada, and topped with a sweet, spicy, tangy, and crispy array of toppings."
  },
  {
    id: 7,
    item: "Aloo Tikki Chaat (2 Pcs)",
    price: "CA$ 8.99",
    desc: "Tikki made of potato, served with ragada of chana and potato, and finished with a sweet, spicy, tangy, and crispy array of toppings."
  }
];

const ChatCornorMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        my: 5
      }}
    >
      {chatcornermenu.map((item) => (
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

export default ChatCornorMenu;
