//dicklength
import React from "react";
import {
  MemoryRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Query from "jquery";
import $ from "jquery"
import { Test } from "./pages/Test"
import { Home } from "./pages/Home"
//import { Aatrox } from "./pages/Aatrox"
import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, List, ListItem, ListItemText, makeStyles, Toolbar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { useSelector } from 'react-redux';
import { ChampionGraph } from "./pages/ChampionGraph";
//import { makeStyles } from "@material-ui/core/styles";





export default function App() {
  const routes = useSelector(state => state.routes)

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
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="home" component={Link} to="/Home">
              <HomeIcon fontSize="large" />
            </IconButton>
            <Container maxWidth="md" className={classes.navbarDisplayFlex}>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navDisplayFlex}
                
              > 
                <Button className={classes.linkText} color="primary" component={Link} to="/Test">Test</Button>
                <Button className={classes.linkText} color="primary" component={Link} to="/Test">Test</Button>
                <Button className={classes.linkText} color="primary" component={Link} to="/Test">Test</Button>
                <Button className={classes.linkText} color="primary" component={Link} to="/Test">Test</Button>
                <Button className={classes.linkText} color="primary" component={Link} to="/Test">Test</Button>
                <Button className={classes.linkText} color="primary" component={Link} to="/Test">Test</Button>
                <Button className={classes.linkText} color="primary" component={Link} to="/Test">Test</Button>

                <ListItem button>
                  <ListItemText/>
                </ListItem>
            
          </List>
        </Container>
      </Toolbar>
    </AppBar>
      <AppBar position="static">

      </AppBar>
      <Switch>
        <Route  path="/test" component={Test} />
        <Route  path="/home" component={Home} />
        <Route  path="/aatrox" component={ChampionGraph} />
      </Switch>
      </div>
    </Router >

  );
}


// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// // This site has 3 pages, all of which are rendered
// // dynamically in the browser (not server rendered).
// //
// // Although the page does not ever refresh, notice how
// // React Router keeps the URL up to date as you navigate
// // through the site. This preserves the browser history,
// // making sure things like the back button and bookmarks
// // work properly.

// export default function BasicExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>

//         <hr />

//         {/*
//           A <Switch> looks through all its children <Route>
//           elements and renders the first one whose path
//           matches the current URL. Use a <Switch> any time
//           you have multiple routes, but you want only one
//           of them to render at a time
//         */}
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// // You can think of these components as "pages"
// // in your app.

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }
