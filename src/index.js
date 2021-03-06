import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import App from './App';

import initServer from './api'

initServer();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
