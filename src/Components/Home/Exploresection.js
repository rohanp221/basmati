import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import MenusectionBgImg from "../../Assets/sectionbg.png";
import Appetizers from "../../Assets/Icons/Appetizer.png";
import Tandoori from "../../Assets/Icons/tandoori.png";
import Soup from "../../Assets/Icons/soup.png";
import Curries from "../../Assets/Icons/curries.png";
import Chinese from "../../Assets/Icons/chinese.png";
import Biryani from "../../Assets/Icons/biryani.png";
import Desert from "../../Assets/Icons/deserts.png";
import PropTypes from "prop-types";
import { Stack } from "@mui/system";
import Appetizertabdishes from "./Appetizertabdishes";
import Soupsreceipes from "./Soupsreceipes";
import Biryanireceipes from "./Biryanireceipes";
import Curriesreceipes from "./Curriesreceipes";
import Chinesereceipes from "./Chinesereceipes";
import Deserstsreceipes from "./Deserstsreceipes";
import ingredient1 from "../../Assets/ingredient1.png";
import ingredient2 from "../../Assets/ingredient2.png";
import ingredient3 from "../../Assets/ingredient3.png";
import ingredient4 from "../../Assets/ingredient4.png";
import ingredient5 from "../../Assets/ingredient5.png";
import ingredient6 from "../../Assets/ingredient6.png";
import Tandoorireceipes from "./tandoorireceipes";

const Tabstitles = [
  {
    id: 0,
    img: Soup,
    Title: "Soups",
  },
  {
    id: 1,
    img: Appetizers,
    Title: "Appetizers",
  },
  {
    id: 2,
    img: Biryani,
    Title: "Biryanis",
  },
  {
    id: 3,
    img: Tandoori,
    Title: "Tandooris",
  },
  {
    id: 4,
    img: Curries,
    Title: "Curries",
  },
  {
    id: 5,
    img: Chinese,
    Title: "Chinese",
  },
  {
    id: 6,
    img: Desert,
    Title: "Deserts",
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 0, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Exploresection = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${MenusectionBgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: "100%",
        position: "relative",
      }}
      id="menu"
    >
      <Container
        maxWidth={"lg"}
        sx={{
          py: { xs: 8, sm: 15 },
        }}
      >
        <Typography
          data-aos="fade-up"
          data-aos-duration="1200"
          align="center"
          sx={{
            fontFamily: "Chivo",
            fontSize: { xs: "16px", sm: "22px", md: "28px" },
            fontWeight: 600,
            color: "#91999F",
          }}
        >
          EXPLORE OUR MENU
        </Typography>
        <Typography
          data-aos="fade-up"
          data-aos-duration="1200"
          align="center"
          sx={{
            fontFamily: "Merienda",
            fontSize: { xs: "24px", sm: "42px", md: "60px" },
            fontWeight: 700,
            color: "#E85A2C",
          }}
        >
          Try Our Specialities
        </Typography>
        <Tabs
          sx={{
            mt: { xs: 2, sm: 5 },
          }}
          value={value}
          onChange={handleChange}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          {Tabstitles.map((item) => (
            <Tab
              key={item.id}
              sx={{ margin: "auto" }}
              label={
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={{ xs: 1, sm: 2 }}
                >
                  <Box
                    sx={{
                      width: { xs: "30px", sm: "45px" },
                      height: { xs: "30px", sm: "45px" },
                    }}
                  >
                    <img src={item.img} alt="" width="100%" height="100%" />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Chivo",
                      fontSize: { xs: "14px", sm: "18px" },
                      textTransform: "capitalize",
                    }}
                  >
                    {item.Title}
                  </Typography>
                </Stack>
              }
              {...a11yProps(item.id)}
            />
          ))}
        </Tabs>
        <TabPanel value={value} index={0}>
          <Soupsreceipes />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Appetizertabdishes />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Biryanireceipes />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Tandoorireceipes />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Curriesreceipes />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Chinesereceipes />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Deserstsreceipes />
        </TabPanel>
      </Container>
      <Box
        sx={{
          width: { xs: "80px", sm: "120px", md: "220px" },
          position: "absolute",
          left: 0,
          top: "2%",
        }}
      >
        <img src={ingredient1} alt="ingredient" width="100%" />
      </Box>
      <Box
        sx={{
          width: { xs: "80px", sm: "126px", md: "176px" },
          position: "absolute",
          right: 10,
          top: "2%",
        }}
      >
        <img src={ingredient2} alt="ingredient" width="100%" />
      </Box>
      <Box
        sx={{
          width: { xs: "80px", sm: "120px", md: "220px" },
          position: "absolute",
          left: 0,
          bottom: { xs: -50, sm: -60, md: -110 },
        }}
      >
        <img src={ingredient3} alt="ingredient" width="100%" />
      </Box>
      <Box
        sx={{
          width: { xs: "80px", sm: "140px", md: "180px" },
          position: "absolute",
          right: 0,
          bottom: "2%",
        }}
      >
        <img src={ingredient4} alt="ingredient" width="100%" />
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          width: { xs: "20px", sm: "80px" },
          position: "absolute",
          left: "2%",
          top: "50%",
        }}
      >
        <img src={ingredient5} alt="ingredient" width="100%" />
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          width: { xs: "20px", sm: "80px" },
          position: "absolute",
          right: "2%",
          top: "27%",
        }}
      >
        <img src={ingredient6} alt="ingredient" width="100%" />
      </Box>
    </Box>
  );
};

export default Exploresection;
