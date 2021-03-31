import React, { useContext } from "react";
import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, List, ListItem, ListItemText, makeStyles, Toolbar, TextField } from "@material-ui/core";
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
    color: theme.palette.icons
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: theme.palette.icons
  },
  background: {
    backgroundColor: theme.palette.primary.dark,
    height: '1000vh'
  },
  appBar: {
    elevation: '24'
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
          <IconButton edge="start" color="inherit" aria-label="home" onClick={() => { window.location.href = "/" }}>
            <HomeIcon fontSize="large" />
          </IconButton>
          <Container maxWidth="sm" className={classes.navbarDisplayFlex}>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              <img style={{ width: '30%', height: 'auto' }} src={"https://freepngimg.com/thumb/league_of_legends/27974-5-league-of-legends-logo-transparent-background.png"} alt="Testingimage" />

              <ListItem button>
                <ListItemText />
              </ListItem>

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
