import React, { useContext } from "react";
import { Typography, AppBar, Container, IconButton, List, ListItem, ListItemText, makeStyles, Toolbar, TextField } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { useRoutes } from "hookrouter";
import Url from "./components/Url";
import { UserContext } from './UserContext'



const useStyles = makeStyles(theme => ({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: theme.palette.icons
  },
  background: {
    backgroundColor: theme.palette.primary.light,
    height: '1000vh'
  },
  appBar: {
    elevation: '24'
  },
  title: {
    background: theme.palette.primary.main,
    color: theme.palette.text.primary
  },
  icons:{
    color: theme.palette.icons
  }
}));

export default function App() {
  const routeResult = useRoutes(Url);
  const { setFilterValue } = useContext(UserContext)



  const classes = useStyles();
  return (

    <div className={classes.background}>
      <div style={{ "height": "20vh" }} />
      <AppBar elevation={15}>
        <Toolbar>
          <IconButton className={classes.icons} edge="start" color="inherit" aria-label="home" onClick={() => { window.location.href = "/" }}>
            <HomeIcon fontSize="large" />
          </IconButton>
          <Container maxWidth="sm" className={classes.navbarDisplayFlex}>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              <Container maxWidth='sm'>
              <Typography variant='h6' ClassName={classes.primaryText}>League of Legends</Typography>
            </Container>


            </List>

          </Container>
          <TextField
            id="standard-textarea"
            label="Search a Champion"
            placeholder="Search a Champion"
            onChange={event => setFilterValue(event.target.value)}
          />
        </Toolbar>
      </AppBar>

      <div className={classes.background}>
        <Container maxWidth="lg">
          <div className={classes.background}>

            {routeResult}

          </div>
        </Container>
      </div>
    </div>


  );
}
