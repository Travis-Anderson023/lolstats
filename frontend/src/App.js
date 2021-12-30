// @ts-nocheck
import React, { useContext } from "react";
import { Typography, AppBar, Container, Button, List, CardMedia, ListItemText, makeStyles, Toolbar, TextField } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import { useRoutes } from "hookrouter";
import Url from "./components/Url";
import { UserContext } from './UserContext';
import {InputAdornment} from '@material-ui/core';



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
    color: theme.palette.secondary.main
  },
  background: {
    backgroundColor: theme.palette.primary.light,
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
  },
  flexContainter: {
    display: `flex`,
    flexDirection: `column`,
    width:'100vw',
  },
  appBar: {
    elevation: '24'
  },
  title: {
    background: theme.palette.primary.main,
    color: theme.palette.text.primary
  },
  icons: {
    color: theme.palette.secondary.main
  }
}));


export default function App() {
  const routeResult = useRoutes(Url);
  const { setFilterValue } = useContext(UserContext)



  const classes = useStyles();
  return (
    <div className={classes.flexContainter}>
      <div >
        <AppBar elevation={15}>
          <Toolbar>
            <Button className={classes.icons} style={{flexGrow:1, justifyContent:'flex-start'}} edge="start" color="inherit" aria-label="home" onClick={() => { window.location.href = "/" }}>
              
              <Typography variant='h6' ClassName={classes.primaryText}>League of Legends</Typography>
            </Button>
            
            <TextField
              style={{ width: '300px', borderBottom:'1px solid #fff' }}
              id="standard-textarea"
              placeholder="Search Champions"
              unfocused
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={event => setFilterValue(event.target.value)}
            />
          </Toolbar>
        </AppBar>
        <div className={classes.background}>
          
            <div className={classes.background} style={{width:'100vw'}}>

              {routeResult}

            </div>
        </div>
      </div>

    </div>

  );
}
