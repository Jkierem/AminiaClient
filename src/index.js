import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { UserStore } from './stores'
import App from './App';
import './master.css';

const store = new UserStore();

ReactDOM.render(
  <BrowserRouter>
    <App store={store}/>
  </BrowserRouter>,
  document.getElementById('root')
);
