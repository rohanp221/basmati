import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const deserts = [
  {
    id: 1,
    item: "Gulab Jamun (2)",
    price: "CA$ 3.99",
  },
  {
    id: 2,
    item: "Rasmalai (2)",
    price: "CA$ 4.99",
  },
  {
    id: 3,
    item: "Gajar Ka Halwa",
    price: "CA$ 4.99",
  },
];

const DesertsMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        my: 5,
      }}
    >
      {deserts.map((item) => (
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

export default DesertsMenu;
