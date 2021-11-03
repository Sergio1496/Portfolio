
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import fondo from '../../images/fondo.jpg'
import TypeWriterEffect from 'react-typewriter-effect'
import pdf from '../../images/cv.pdf'

const About = ({title, id}) => {
    const classes = useStyles();


    return (
        <div className={classes.section}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Card style={{background: "#424242"}} className={classes.card}>
                    <CardMedia image={fondo}className={classes.media} title="foto"/>
                    <CardContent className={classes.cardContent}>
                    <TypeWriterEffect
                        textStyle={{
                        fontFamily: 'Red Hat Display',
                        color: '#F0A71C',
                        fontWeight: 700,
                        fontSize: '1.9em',
                        }}
                        startDelay={100}
                        cursorColor="#FFA73D"
                        text="Sergio Expósito"
                        typeSpeed={100}>
                    </TypeWriterEffect>
                    <TypeWriterEffect
                        textStyle={{
                        fontFamily: 'Red Hat Display',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '1em',
                        }}
                        startDelay={2000}
                        cursorColor="#FFA73D"
                        text="Desarrollador Front-End"
                        typeSpeed={100}>
                    </TypeWriterEffect>
                    <Typography variant="h6" color="#fff">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href={pdf} download variant="contained" className={classes.cvButton}>
                            Descargar CV
                        </Button>
                    </CardActions>
                </Card>
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
    card:{
        height: "70vh",
        display: "flex",
        marginTop: theme.spacing(6),
        position: "relative",

    },
    media:{
        width: "250px",
        height: "auto",
        objectFit: "cover",
        margin: theme.spacing(5),
        borderRadius: "10px"
    },
    cvButton:{
        position: "absolute !important",
        bottom: "1rem",
        right: "2rem",
        backgroundColor:"#18191A !important",
        color: "#F0A71C !important",
        fontWeight: "bold",
        padding: "20px 30px !important",
        [theme.breakpoints.down("sm")]:{
            bottom: "2.5rem",
            right: "1rem"
        }
    },
    cardContent:{
        marginTop: theme.spacing(2),
        "& h6":{
            marginTop: theme.spacing(6),
            [theme.breakpoints.down("sm")]:{
                display: 'none'
            }

        }
    }

  }));



export default About
