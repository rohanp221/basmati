import { AppBar, Box, Button, Stack, Toolbar } from "@mui/material";
import React from "react";
import basmatilogo from "../Assets/basmatilogo.png";

const navItems = [
  {
    id: 0,
    name: "Home",
    path: "/",
    tagId: "home"
  },
  {
    id: 1,
    name: "About",
    path: "/about",
    tagId: "about"
  },
  {
    id: 2,
    name: "Menu",
    path: "/menu",
    tagId: "menu"
  },
  {
    id: 3,
    name: "Contact",
    path: "/contact",
    tagId: "contact"
  }
];

const Navbar = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("mobile_logo") &&
        (document.getElementById("mobile_logo").style.width = "80px");
      document.getElementById("desktop_logo") &&
        (document.getElementById("desktop_logo").style.width = "120px");
    } else {
      document.getElementById("mobile_logo") &&
        (document.getElementById("mobile_logo").style.width = "180px");
      document.getElementById("desktop_logo") &&
        (document.getElementById("desktop_logo").style.width = "280px");
    }
  }

  return (
    // Desktop Navigationbar
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          id="nav"
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            color: "#000",
            boxShadow: "0px 0px 0px #EAAB2A",
            backgroundColor: "#EAAB2A",
            py: 1
          }}
        >
          <Toolbar
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              justifyContent: "space-between"
            }}
          >
            <Box
              id="desktop_logo"
              style={{
                width: "280px",
                transition: "0.5s",
                padding: "0 0 0 40px"
              }}
            >
              <img src={basmatilogo} alt="logo" width="100%" height="100%" />
            </Box>
            <Stack direction="row">
              <Stack
                direction="row"
                spacing={2}
                sx={{ display: { xs: "none", md: "block", sm: "none" } }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    sx={{
                      fontSize: "1.3rem",
                      fontWeight: "500",
                      color: "#fff",
                      textTransform: "capitalize",
                      fontFamily: "Chivo"
                    }}
                  >
                    <a
                      style={{
                        fontSize: "inherit",
                        color: "inherit",
                        textDecoration: "none"
                      }}
                      href={`#${item.tagId}`}
                    >
                      {item.name}
                    </a>
                  </Button>
                ))}
              </Stack>
              <a
                href="https://order.tbdine.com/pickup/47431"
                className="ordernow"
                target="blank"
              >
                <Button
                  variant="contained"
                  sx={{
                    display: { xs: "none", md: "block", sm: "none" },
                    backgroundColor: "#492B29",
                    color: "#fff",
                    border: "1px solid #492B29 ",
                    borderRadius: "25px",
                    width: "145px",
                    height: "50px",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0px 60px",
                    textTransform: "capitalize",
                    fontFamily: "Chivo",
                    "&:hover": {
                      background: "#492B29"
                    }
                  }}
                >
                  Order Now
                </Button>
              </a>
            </Stack>
          </Toolbar>
        </AppBar>

        {/* Mobile NavigationBar */}
        <Box
          id="mobile_navbar"
          sx={{
            width: "96%",
            display: { xs: "flex", sm: "flex", md: "none" },
            backgroundColor: "#EAAB2A",
            justifyContent: "space-between",
            alignItems: "center",
            position: "fixed",
            p: { xs: 1, sm: 2 },
            zIndex: 100000
          }}
        >
          <Box
            id="mobile_logo"
            style={{
              display: { xs: "block", sm: "none" },
              width: "180px",
              transition: "0.5s"
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
                p: "10px 20px",
                textTransform: "capitalize",
                fontFamily: "Chivo",
                "&:hover": {
                  background: "#492B29"
                }
              }}
            >
              Order Now
            </Button>
          </a>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
