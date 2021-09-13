import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { UserContext } from '../UserContext'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(0),
        backgroundColor: theme.palette.primary.main,
        textAlign: 'center',
        overflow: 'hidden',
        boxSizing: 'border-box',
        '&:hover': {
            transition: 'background-color 1s ease',
            background: theme.palette.accent
        },
        '&:hover div':{
            opacity: 1,
            transitionDuration: '1.0s'
        }

    },
    caption: {
        opacity: 0,
    }
}));

export const Home = () => {
    const { routes, filterValue } = useContext(UserContext);


    const classes = useStyles();

    const filteredRoutes = routes.filter((route) => {
        return route.text.toLowerCase().includes(filterValue.toLowerCase())
    })
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={3}
                direction="row"
                alignItems="center"
                justify="center"
                backgroundSize="contain"
                style={{ minHeight: '100vh' }}
            >
                {
                    filteredRoutes.map((route, index) => (
                        <Grid item xs={12} sm={9} md={6} lg={3} xl={3} onClick={() => { window.location.href = route.path }} key={index}> 
                            <Paper className={classes.paper}>
                                {route.img}
                                <div className={classes.caption}>{route.text}</div>
                            </Paper>
                        </Grid>
                    ))
                }




            </Grid>
        </div>
    );
}