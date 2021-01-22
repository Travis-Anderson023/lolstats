import React from "react";
// import {
//   MemoryRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom";
// import { Test } from "./pages/Test"
// import { Home } from "./pages/Home"
//import { Aatrox } from "./pages/Aatrox"
import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, List, ListItem, ListItemText, makeStyles, Toolbar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
// import { ChampionGraph } from "./pages/ChampionGraph";
import { useRoutes } from "hookrouter";
import Url from "./components/Url";
//import { makeStyles } from "@material-ui/core/styles";





export default function App() {
  const routeResult = useRoutes(Url);

  const useStyles = makeStyles({
    navbarDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`
    },
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`
    }
  });
  const classes = useStyles();

  return (
    
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="home" onClick={()=>{window.location.href = "/"}}>
              <HomeIcon fontSize="large" />
            </IconButton>
            <Container maxWidth="md" className={classes.navbarDisplayFlex}>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navDisplayFlex}

              >
                <Button className={classes.linkText} color="primary" onClick={()=>{window.location.href = "/test"}}>Test</Button>
                <Button className={classes.linkText} color="primary" onClick={()=>{window.location.href = "/test"}}>Test</Button>
                <Button className={classes.linkText} color="primary" onClick={()=>{window.location.href = "/test"}}>Test</Button>
                <Button className={classes.linkText} color="primary" onClick={()=>{window.location.href = "/test"}}>Test</Button>
                <Button className={classes.linkText} color="primary" onClick={()=>{window.location.href = "/test"}}>Test</Button>
                <Button className={classes.linkText} color="primary" onClick={()=>{window.location.href = "/test"}}>Test</Button>
                <Button className={classes.linkText} color="primary" onClick={()=>{window.location.href = "/test"}}>Test</Button>

                <ListItem button>
                  <ListItemText />
                </ListItem>

              </List>
            </Container>
          </Toolbar>
        </AppBar>
        <AppBar position="static">

        </AppBar>
        {/* <Switch>
          <Route path="/test" component={Test} />
          <Route exact path="/" component={Home} />
          <Route path="/Aatrox" component={ChampionGraph} />
        </Switch> */}
        {routeResult}
      </div>
    

  );
}