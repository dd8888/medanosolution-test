import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { withRouter } from "react-router";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#212121",
  },
  "@global": {
    ".regionsImages": {
      width: "50%",
      border: "4px solid #3b3b3b",
      borderRadius: "10px",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
    },
  },
}));
function Regions() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs"
            centered
            style={{ width: "100%", backgroundColor: "#3b3b3b" }}
          >
            <Tab label="Kanto" {...a11yProps(0)} />
            <Tab label="Johto" {...a11yProps(1)} />
            <Tab label="Hoenn" {...a11yProps(2)} />
            <Tab label="Sinnoh" {...a11yProps(3)} />
            <Tab label="Unova" {...a11yProps(4)} />
            <Tab label="Kalos" {...a11yProps(5)} />
            <Tab label="Alola" {...a11yProps(6)} />
            <Tab label="Galar" {...a11yProps(7)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <img
            src="https://cdn.bulbagarden.net/upload/thumb/2/25/LGPE_Kanto_Map.png/800px-LGPE_Kanto_Map.png"
            alt="kanto"
            className="regionsImages"
          ></img>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <img
            src="https://cdn.bulbagarden.net/upload/thumb/6/64/JohtoMap.png/800px-JohtoMap.png"
            alt="Johto"
            className="regionsImages"
          ></img>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <img
            src="https://cdn.bulbagarden.net/upload/thumb/8/85/Hoenn_ORAS.png/800px-Hoenn_ORAS.png"
            alt="Hoenn"
            className="regionsImages"
          ></img>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <img
            src="https://cdn.bulbagarden.net/upload/thumb/7/74/Pt_Sinnoh.png/800px-Pt_Sinnoh.png"
            alt="Sinnoh"
            className="regionsImages"
          ></img>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <img
            src="https://cdn.bulbagarden.net/upload/thumb/f/fc/Unova_B2W2_alt.png/800px-Unova_B2W2_alt.png"
            alt="Unova"
            className="regionsImages"
          ></img>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <img
            src="https://cdn.bulbagarden.net/upload/thumb/8/8a/Kalos_alt.png/800px-Kalos_alt.png"
            alt="Kalos"
            className="regionsImages"
          ></img>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <img
            src="https://cdn.bulbagarden.net/upload/thumb/0/0b/Alola_USUM_artwork.png/800px-Alola_USUM_artwork.png"
            alt="Alola"
            className="regionsImages"
          ></img>
        </TabPanel>
        <TabPanel value={value} index={7}>
          <img
            src="https://cdn.bulbagarden.net/upload/thumb/c/ce/Galar_artwork.png/424px-Galar_artwork.png"
            alt="Galar"
            className="regionsImages"
          ></img>
        </TabPanel>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default withRouter(Regions);
