import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducers from './reducers';
import { BrowserRouter } from "react-router-dom"
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// const saveToLocalStorage = (state) => {
//   try{
//     const serializedState = JSON.stringify(state)
//     localStorage.setItem('state', serializedState)
//   }catch(err){
//     console.log(err)
//   }
// }

// store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();