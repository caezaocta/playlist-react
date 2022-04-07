import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from '../src/redux/store'
// import { configureStore } from "@reduxjs/toolkit";
import configureStore from '../src/redux/store'

// const store = configureStore()
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  rootElement
);

reportWebVitals();
