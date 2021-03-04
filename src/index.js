import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';

const express = require("express");
const app = express();

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Route path='/' component={App}/>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

app.listen(process.env.PORT||3000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
