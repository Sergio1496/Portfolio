import React, { Fragment } from 'react'
import Cards from './Cards.js'
import wordpress from '../../images/wordpress.png'
import git from '../../images/git.png'
import java from '../../images/java.png'
import html from '../../images/html.png'
import css from '../../images/css.png'
import react from '../../images/react.png'
import sql from '../../images/sql.png'
import adobe from '../../images/adobe.png'
import javascript from '../../images/javascript.png'
import { Grid } from '@mui/material'



const Tecnologias = () => {
    return (
        <div>
            <Fragment>
                <Grid
                    container spacing={1}
                    justify="center"
                    >
                    <Grid item xs={6} md={4} align="center">
                        <Cards nivel={5} img={html} text="Html" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    </Grid>
                    <Grid item xs={6} md={4} align="center">
                        <Cards nivel={4} img={css} text="Css" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    </Grid>
                    <Grid item xs={6} md={4} align="center">
                        <Cards nivel={2} img={javascript} text="Javascript" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    </Grid>
                    <Grid item xs={6} md={4} align="center">
                        <Cards nivel={2} img={react} text="ReactJs" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    </Grid>
                    <Grid item xs={6} md={4} align="center">
                        <Cards nivel={3} img={git} text="GIT" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    </Grid>
                    <Grid item xs={6} md={4} align="center">
                        <Cards nivel={4} img={sql} text="SQL" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    </Grid>
                    <Grid item xs={6} md={4} align="center">
                        <Cards nivel={4} img={java} text="Java" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    </Grid>
                    <Grid item xs={6} md={4} align="center">
                        <Cards nivel={5} img={wordpress} text="Wordpress" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    </Grid>
                    <Grid item xs={6} md={4} align="center">
                        <Cards nivel={3} img={adobe} text="Adobe" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    </Grid>
                </Grid>
            </Fragment>
        </div>
    )
}

export default Tecnologias
