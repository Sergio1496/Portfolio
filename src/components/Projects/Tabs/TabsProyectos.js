import { Tab, Tabs, Typography, Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types'
import { makeStyles } from "@mui/styles";
import TabsPaneles from "./TabsPaneles";
import imgDefault from "../../../images/imgdefault.png"
import { stagger } from "motion";
import { useMotionAnimate, useMotionTimeline } from "motion-hooks";


function TabPanel(props) {
    const { children, value, index, } = props;
    const classes = useStyles();
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        className={classes.centrar}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
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
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  export default function TabsProyectos() {
    const animated = useRef(null);
    const { play, isFinished, replay } = useMotionTimeline(
    [
      // You can use Refs too!
      [animated, { y: [50, 0], opacity: 1 }],
      [".animatedTab", { y: [50, 0], opacity: [0, 1] }],
      [".container p", { opacity: 1 }]
    ],
    { duration: 2 }
  );

  useEffect(() => {
    play();
  }, []);
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box
        sx={{ flexGrow: 1, bgcolor: '#18191A', display: 'flex', height: 350}}
      >
        <Tabs
          ref={animated}
          className={classes.tabColor}
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab className={classes.tabTextColor} label="App" {...a11yProps(0)} />
          <Tab className={classes.tabTextColor} disabled sx={{color: "#C0C0C0 !important", fontWeight: "bold"}}label="Crypto App" {...a11yProps(1)} />
          <Tab className={classes.tabTextColor} disabled sx={{color: "#C0C0C0 !important", fontWeight: "bold"}}label="Weather App" {...a11yProps(2)} />
          <Tab className={classes.tabTextColor} label="Item Four" {...a11yProps(3)} />
          <Tab className={classes.tabTextColor} label="Item Five" {...a11yProps(4)} />
          <Tab className={classes.tabTextColor} label="Item Six" {...a11yProps(5)} />
          <Tab className={classes.tabTextColor} label="Item Seven" {...a11yProps(6)} />
        </Tabs>
        <TabPanel className={classes.tabBackgroundColor, "animatedTab"} value={value} index={0}>
          <TabsPaneles  sx={{marginLeft: "auto", marginRight: "auto"}}img={imgDefault} title="" desc="" link=""/>
        </TabPanel>
        <TabPanel className={classes.tabBackgroundColor} value={value} index={1}>
          <TabsPaneles img={imgDefault} title="" desc="" link=""/>
        </TabPanel>
        <TabPanel className={classes.tabBackgroundColor} value={value} index={2}>
          <TabsPaneles img={imgDefault} title="" desc="" link=""/>
        </TabPanel>
        <TabPanel className={classes.tabBackgroundColor} value={value} index={3}>
          <TabsPaneles img={imgDefault} title="" desc="" link=""/>
        </TabPanel>
        <TabPanel className={classes.tabBackgroundColor} value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel className={classes.tabBackgroundColor} value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel className={classes.tabBackgroundColor} value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>
    );
  }

  const useStyles = makeStyles((theme) => ({
    centrar:{
      marginLeft: "auto !important", 
      marginRight: "auto !important"
    },
    tabColor:{
      backgroundColor: "#18191A",
      "& .MuiTabs-indicator":{
        backgroundColor: "#F0A71C !important"
      },
      "& .Mui-selected":{
        color:"#F0A71C !important",
      },
      
    },
    tabTextColor:{
        color:"#FEC760 !important",
        fontWeight: "bold !important",
        
    },
    tabBackgroundColor:{
        color:"#424242"
    },
}));