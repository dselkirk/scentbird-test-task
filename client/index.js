import React from 'react';
import { render } from 'react-dom';
import { App } from './containers/App/App.js';

// Favicon link is in the template, this just makes webpack package it up for us
import './images/favicon.ico';

render((
  <App/>
), document.getElementById('root'));
