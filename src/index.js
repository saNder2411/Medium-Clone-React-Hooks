import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {CurrentUserProvider} from './contexts/current-user/current-user';
import App from './components/app/app';


ReactDOM.render(
  <CurrentUserProvider>
    <Router>
      <App />
    </Router>
  </CurrentUserProvider>,
  document.getElementById(`root`)
);
