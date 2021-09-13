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
      main: '#202040',
    },
    icons: '#602080',
    accent: '#602080',
    text: {
      primary: '#FFFFFF',
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

