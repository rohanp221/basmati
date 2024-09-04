import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import basmatilogo from "../../Assets/basmatilogo.png";

const MenuNavbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar
        sx={{
          color: "#000",
          boxShadow: "0px 0px 0px #EAAB2A",
          backgroundColor: "#EAAB2A",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: { xs: "80px", sm: "160px" },
              ml: { xs: 0, sm: 15 },
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          >
            <img src={basmatilogo} alt="logo" width="100%" height="100%" />
          </Box>
          <a
            href="https://order.tbdine.com/pickup/47431"
            className="ordernow"
            target="blank"
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#492B29",
                color: "#fff",
                border: "1px solid #492B29 ",
                borderRadius: "25px",
                width: "145px",
                height: "50px",
                justifyContent: "center",
                alignItems: "center",
                margin: { xs: "0px", sm: "0px 60px" },
                textTransform: "capitalize",
                fontFamily: "Chivo",
                "&:hover": {
                  background: "#492B29",
                },
              }}
            >
              Order Now
            </Button>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuNavbar;
