import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider, Rating} from '@mui/material';
import { makeStyles } from '@mui/styles';

export default function Cards({text, desc, img, nivel}) {
    const classes = useStyles();
    return (
        <Card className={classes.card} sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            image={img}
            alt={text}
            className={classes.cardMedia}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" color="#fff" className={classes.centerText} component="div">
                {text}
            </Typography>
            <Divider variant="middle" />
            <Typography variant="body2" className={classes.centerText}  color="#fff">
                {desc}
            </Typography>
            <Rating name="read-only" value={nivel} readOnly />
            </CardContent>
        </CardActionArea>
        </Card>
    );
}

const useStyles = makeStyles((theme) => ({
    card:{
        height: "40vh",
        display: "flex",
        marginTop: theme.spacing(2),
        position: "relative",
        borderRadius: "10px !important",
        backgroundColor: "#424242 !important",
        boxShadow: "0 8px 30px -12px rgba(0,0,0,1.5) !important",
          "&:hover": {
            boxShadow: "0 16px 30px -12.125px rgba(0,0,0,10) !important"
          },
        [theme.breakpoints.down("sm")]:{
            height: "50vh",
        },
        
        
    },
    cardMedia:{
        width:"auto !important",
        height: "auto !important",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "100px",
        marginTop: theme.spacing(1)
    },
    centerText:{
        textAlign: "center"
    }
}));