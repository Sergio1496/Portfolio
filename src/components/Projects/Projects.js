import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import TabsProyectos from './Tabs/TabsProyectos.js';

const Projects = ({title, id}) => {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <TabsProyectos/>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight:"100vh",
        background: "#18191A",
        color: "#fff"
    }, 
    sectioncontent:{
        maxWidth: "80vw",
        margin: "0 auto",
        
    },
}));


export default Projects
