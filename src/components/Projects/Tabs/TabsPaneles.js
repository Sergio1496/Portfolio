import { makeStyles } from '@mui/styles';
import React from 'react'

const TabsPaneles = ({img}) => {
    const classes = useStyles();
    return (
        <div>
            <img className={classes.imgSize} src={img}></img>
            <span>Hola</span>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    imgSize:{
        width: "100%",
        height: "40vh",
        marginLeft: "auto",
        marginRight: "auto"
    },
}));

export default TabsPaneles
