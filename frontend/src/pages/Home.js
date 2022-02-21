//@ts-nocheck
import { Box, CardMedia, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../UserContext';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
    paper: {
        padding: theme.spacing(0),
        backgroundColor: theme.palette.primary.main,
        textAlign: 'center',
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
            transition: 'background-color 1s ease',
            background: theme.palette.secondary.main,
        },
        '&:hover div': {
            opacity: 1,
            transitionDuration: '1.0s'
        },


    },
    caption: {
        opacity: .8,
        fontSize: '1.2rem',
        //tranform text down slightly
        transform: 'translateY(0.08rem)'

    },
    filter: {
        filter: 'grayscale(.7)',
        height: '250px',
        '&:hover': {
            filter: 'grayscale(0)',
            transitionDuration: '1.0s'
        }
    },

    foregroundStyle: {
        position: 'relative',
        zIndex: 100,
        width: '100%'
    }
}));

const titleStyle = {
    height: '200px',
    background: 'linear-gradient(rgba(33,33,33,.15), rgba(33,33,33,0))',
}

export const Home = () => {
    const paralaxref = React.useRef();

    const [paralaxPosition, setParalaxPosition] = React.useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setParalaxPosition(paralaxref.current?.clientHeight ? window.pageYOffset / paralaxref.current.clientHeight * -window.innerHeight : 0)
            //(returns 0-1 for percent scrolled)*(multiplier for image height)
        }
    }, [])


    const backdropImgStyle = {
        height: '200vh',
        width: '100%',
        position: 'fixed',
        top: paralaxPosition,
        left: 0,
        right: 0,
        zIndex: -100,
        filter: 'grayscale(.7)',
    }
    const { routes, filterValue } = useContext(UserContext);


    const classes = useStyles();

    const filteredRoutes = routes.filter((route) => {
        return route.text.toLowerCase().includes(filterValue.toLowerCase())
    })
    return (

        <Box ref={paralaxref} className={classes.foregroundStyle}>
            <CardMedia style={backdropImgStyle} component={'img'} image={"https://i.imgur.com/S919SiU.png"} alt="fill murray" />
            <div style={{ titleStyle }}>
                <Typography variant="h3" style={{ ...titleStyle, paddingTop: '90px', color: 'Black', marginTop: '1rem', }}>
                    <Typography variant='h4' style={{ textAlign: 'center', transform: 'translateY(1rem)' }}>
                        Choose your
                    </Typography>

                    <Typography variant='h1' style={{
                        textAlign: 'center' ,
                        fontSize: '3.5rem',
                    }}>
                        Champion
                    </Typography>
                    <Typography variant='body2' style={{ textAlign: 'center' }}>
                        With more than 140 champions, you’ll find the perfect match<br /> for your playstyle. Master one, or master them all.
                    </Typography>
                </Typography>



            </div>
            <div className={classes.root}>
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh', padding: '60px', width: '100%', margin: '0' }}
                >
                    {
                        filteredRoutes.map((route, index) => (
                            <Grid item xs={12} sm={9} md={6} lg={3} xl={3} onClick={() => { window.location.href = route.path }} key={index}>
                                <Paper elevation={10} className={classes.paper} >
                                    <div className={classes.filter}>{route.img}</div>
                                    <Typography className={classes.caption}>{route.text}</Typography>
                                </Paper>
                            </Grid>
                        ))
                    }




                </Grid>
            </div>

        </Box>
    );
}