import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const weekendmenu = [
  {
    id: 1,
    item: "Chicken Pulao",
    price: "CA$ 15.99",
  },
  {
    id: 2,
    item: "Mutton Pulao",
    price: "CA$ 16.99",
  },
  {
    id: 3,
    item: "Haleem Mutton",
    price: "CA$ 14.99",
  },
];

const WeekendSpl = () => {
  return (
    <Box
      sx={{
        width: "100%",
        my: 5,
      }}
    >
      {weekendmenu.map((item) => (
        <Box
          id={item.id}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
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
          <hr className="menuList" />
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

export default WeekendSpl;
