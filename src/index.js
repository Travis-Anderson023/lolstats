import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { UserContainer } from './UserContext';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3F51B5',
    },
    icons: '#FFFFFF',
    accent: '#03A9F4',
    text: {
      primary: '#212121',
      secondary: '#757575'
    },
    divider: '#BDBDBD'
  }
},
);
ReactDOM.render(
  <UserContainer>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </UserContainer>,
  document.getElementById('root')
);

