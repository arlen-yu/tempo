import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import '../styles/common.css';

ReactDOM.render(
  (<BrowserRouter><App /></BrowserRouter>),
  document.getElementById('app'));
