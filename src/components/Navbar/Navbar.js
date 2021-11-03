import React, { useState } from 'react'
import Appbar from '@mui/material/AppBar'
import {colors, Divider, Drawer, IconButton,List, ListItem, ListItemIcon, Toolbar } from '@mui/material'
import logo from '../../images/logo.png'
import { makeStyles } from '@mui/styles'
import InfoIcon from '@mui/icons-material/Info';
import FolderIcon from '@mui/icons-material/Folder';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import {Link, animateScroll as scroll } from 'react-scroll'
import { Box,  } from '@mui/system'




const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    const links = [
        {
            id: "about",
            text: "Sobre mi",
            icon: <InfoIcon className={classes.iconColor}/>
        },
        {
            id: "projects",
            text: "Mis proyectos",
            icon: <FolderIcon className={classes.iconColor}/>
        },
        {
            id: "skills",
            text: "Mis conocimientos",
            icon: <AssessmentIcon className={classes.iconColor}/>
        },
        {
            id: "contact",
            text: "Contacto",
            icon: <PersonIcon className={classes.iconColor}/>
        }
    
    ]

    return (
        <>
        <Appbar elevation={0} position="sticky" className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <img src={logo} alt="logo" className={classes.logo} />
                <List className={classes.menu}>
                    {
                        links.map(({id,text}, index) =>(
                            <Link key={index} 
                            to={id} 
                            spy={true} 
                            activeClass="active" 
                            smooth={true} 
                            duration={500} 
                            offset={-70}>{text}</Link>
                        ))
                    }
                </List>
                
                <Box className={classes.menubutton}>
                    <IconButton edge="end" onClick={()=>setOpen(!open)}>
                        <MenuIcon  className={classes.colorHamb} fontSize="large"/>
                    </IconButton>
                </Box>
            </Toolbar>
        </Appbar>
        <Drawer 
            anchor="right" className={classes.paper} open={open} onClose={()=>setOpen(false)}>
            <IconButton onClick={()=>setOpen(false)}>
                <CancelIcon fontSize="large" className={classes.cancelIcon}/>
            </IconButton>
            
            {
                        links.map(({id,text, icon}, index) =>(
                            <Link key={index} 
                            className={classes.sidebar}
                            to={id} 
                            spy={true} 
                            activeClass="active" 
                            smooth={true} 
                            duration={500} 
                            offset={-70}>
                            <ListItem component="h5">
                                <span >
                                    <ListItemIcon >
                                        {icon}
                                    </ListItemIcon>
                                </span>{text}
                            </ListItem>
                            </Link>
                        ))
            }
        </Drawer>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: "#18191A", 
        boxShadow: 'none'
        
    },
    toolbar:{
        backgroundColor: '#18191A', 
        boxShadow: 'none',
        float: "right"
    },
    menubutton:{
        [theme.breakpoints.up("sm")]:{
            display: "none",
        },
        
        [theme.breakpoints.down("sm")]:{
            display: "block",
            color: "#F0A71C",
            position: "absolute",
            top: 0,
            right: 10
        },
    },
    colorHamb:{
        color: "#F0A71C",
    },
    cancelIcon:{
        color: "#F0A71C",
        position: "absolute",
        top: 10,
        right:10
    },
    iconColor:{
        color:"#F0A71C",
    },
    paper:{
        "& .MuiPaper-root": {
            background:"#18191A",
            borderRadius: "10px",
        }
    },
    menu:{
        //Para pantallas pequeñas small el menu desaparece
        [theme.breakpoints.down("sm")]: {
            display:"none",
        },

        "& a":{
            background: "#F0A71C",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "1,4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3),
        },
        "& a:hover":{
            cursor: "pointer",
            color: "-webkit-linear-gradient(80deg, #F0A71C 30%, #FEC760 90%)",
            borderBottom: "2px solid #F0A71C"
        }
    },
    sidebar:{
        backgroundColor: "#18191A",
        width: "40vw",
        [theme.breakpoints.down("sm")]:{
            width:"60vw"
        },
        "& h5":{
            margin: theme.spacing(1,0,0,0),
            fontSize: "1,4rem",
            color:  "#fff",
            top:30,
            fontWeight: "bold"
        },
        "& h5:hover":{
            color: "#F0A71C",
            cursor: "pointer"
        },

    },
    logo: {
        height: "1,5rem",
        objectFit: "contain",
        "&:hover":{
            cursor: "pointer"
        }
    }
  }));

export default Navbar
