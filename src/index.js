import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import './include/bootstrap'

import './index.css';
import './style/header.css'
import './style/footer.css'
import './style/body.css'

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  
  document.getElementById('root'));

serviceWorker.register();