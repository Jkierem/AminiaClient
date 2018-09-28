import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { UserStore , ActionLogStore } from './stores'
import { Provider } from 'mobx-react'
import App from './App';
import './master.css';

const userStore = new UserStore();
const actionStore = new ActionLogStore();

ReactDOM.render(
  <Router>
    <Provider userStore={userStore} actionStore={actionStore}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
