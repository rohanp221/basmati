import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container } from "@mui/material";
import AppetizersMenu from "./appetizersMenu";
import TandooriPlatter from "./tandooriPlatter";
import CurriesMenu from "./curriesMenu";
import IndoChineseMenu from "./indoChineseMenu";
import BiryaniMenu from "./biryaniMenu";
import BeveragesMenu from "./beveragesMenu";
import SideOrders from "./sideOrders";
import Chatcorner from "../../Assets/Chatcorner.png";
import StreetSplash from "../../Assets/StreetSplash.png";
import Lassies from "../../Assets/Laasies.png";
import Snacks from "../../Assets/Snacks.png";
import Milkshake from "../../Assets/Milkshake.png";
import beverages from "../../Assets/beverages.png";
import muttonbiryani from "../../Assets/muttonbiryani.png";
import tandooriplatter from "../../Assets/tandooriplatter.png";
import chickenhakkanoodles from "../../Assets/chickenhakkanoodles.png";
import gulabjaamun from "../../Assets/gulabjaamun.png";
import kadaichicken from "../../Assets/kadaichicken.png";
import naan from "../../Assets/naan.png";
import ChatCornorMenu from "./chatCornerMenu";
import SnacksMenu from "./snacksMenu";
import StreetSplashMenu from "./streetSplashMenu";
import SweeteMenu from "./sweetsMenu";
import MilkShakesMenu from "./milkShakesMenu";
import LassiMenu from "./lassiMenu";

const menu = [
  // {
  //   id: 1,
  //   category: "Soups",
  //   menuItems: <SoupsMenu />,
  //   img: chickensoup
  // },
  {
    id: 1,
    category: "Appetizers",
    menuItems: <AppetizersMenu />,
    img: muttonbiryani
  },
  {
    id: 2,
    category: "Tandoori Platters",
    menuItems: <TandooriPlatter />,
    img: tandooriplatter
  },
  {
    id: 3,
    category: "Curries",
    menuItems: <CurriesMenu />,
    img: kadaichicken
  },
  {
    id: 4,
    category: "Biryanis",
    menuItems: <BiryaniMenu />,
    img: muttonbiryani
  },
  {
    id: 5,
    category: "Indo-Chinese",
    menuItems: <IndoChineseMenu />,
    img: chickenhakkanoodles
  },
  // {
  //   id: 7,
  //   category: "Weekend Special",
  //   menuItems: <WeekendSpl />,
  //   img: palav,
  // },
  {
    id: 6,
    category: "Side Orders",
    menuItems: <SideOrders />,
    img: naan
  },
  // {
  //   id: 8,
  //   category: "Deserts",
  //   menuItems: <DesertsMenu />,
  //   img: gulabjaamun
  // },
  {
    id: 7,
    category: "Beverages",
    menuItems: <BeveragesMenu />,
    img: beverages
  },
  {
    id: 8,
    category: "Chat Corner",
    menuItems: <ChatCornorMenu />,
    img: Chatcorner
  },
  {
    id: 9,
    category: "Snacks",
    menuItems: <SnacksMenu />,
    img: Snacks
  },
  {
    id: 10,
    category: "Street Splash",
    menuItems: <StreetSplashMenu />,
    img: StreetSplash
  },
  {
    id: 11,
    category: "Sweets",
    menuItems: <SweeteMenu />,
    img: gulabjaamun
  },
  {
    id: 12,
    category: "Milk Shakes",
    menuItems: <MilkShakesMenu />,
    img: Milkshake
  },
  {
    id: 13,
    category: "Lassi",
    menuItems: <LassiMenu />,
    img: Lassies
  }
];

export default function MenuAccordian() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        my: 7,
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      {menu.map((item) => (
        <Accordion
          expanded={expanded === `panel${item.id}`}
          onChange={handleChange(`panel${item.id}`)}
        >
          <AccordionSummary
            expandIcon={
              <Box
                sx={{
                  width: "28px",
                  height: "28px",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px"
                }}
              >
                <ExpandMoreIcon />
              </Box>
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{
              backgroundColor: "#492B29",
              color: "#fff",
              height: { xs: "70px", sm: "90px" }
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: { xs: "50px", sm: "70px" },
                  height: { xs: "50px", sm: "70px" }
                }}
              >
                <img
                  src={item?.img}
                  alt="img"
                  width="100%"
                  height="100%"
                  className="menuimg"
                />
              </Box>
              <Typography
                sx={{
                  flexShrink: 0,
                  fontFamily: "Merienda",
                  fontSize: { xs: "20px", sm: "32px" },
                  ml: 2
                }}
              >
                {item.category}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              maxHeight: "50vh",
              overflowY: "scroll",
              scrollbarWidth: "none"
            }}
          >
            {item.menuItems}
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
