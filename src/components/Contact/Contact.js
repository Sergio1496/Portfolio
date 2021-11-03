import React from 'react'
import { makeStyles } from '@mui/styles';
import { Button, Paper, TextField, Typography } from '@mui/material';



const Contact = ({id}) => {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.sectioncontent} id={id}>
                <Paper className={classes.root}>
                    <div className={classes.title}>
                        <Typography variant="h5">Contacta conmigo</Typography>
                        <form className={classes.form} noValidate autoComplete="off">
                            <TextField label="Nombre" />
                            <TextField label="Correo" />
                            <TextField label="Asunto" />
                            <TextField label="Escribe un mensaje" />
                        </form>
                        <Button variant="contained">Enviar</Button>
                    </div>
                </Paper>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: theme.spacing(20),
        backgroundColor: "#424242 !important",
        color: "#F0A71C !important",
        fontWeight: "bold !important",
        fontSize: "1.2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: theme.spacing(4),
        "& button":{
            backgroundColor:"#18191A",
            color: theme.palette.primary.main,
            fontWeight: 700,
            fontSize: "1.0rem",
            marginLeft: "auto",
            marginRight: "auto"
        },
        "& button:hover":{
            backgroundColor: "#252627",
            color: theme.palette.secondary.main
        },
    },
    section: {
        minHeight:"100vh",
        background: "#18191A",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    sectioncontent:{
        maxWidth: "80vw",
    },
    title:{
        "& h5":{
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
            marginLeft: "auto",
            marginRight: "auto",
            fontWeight: "bold"
        }
    },
    form:{
        display:"flex",
        flexDirection: "column",
        marginBottom: theme.spacing(2),
        marginLeft: "auto",
        marginRight: "auto",
        "& input":{
            marginBottom: theme.spacing(2)
        }
    }
}));

export default Contact
