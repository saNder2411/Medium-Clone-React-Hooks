import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {CurrentUserProvider} from './contexts/current-user/current-user';
import CurrentUserChecker from './components/current-user-checker/current-user-checker';
import App from './components/app/app';


ReactDOM.render(
  <CurrentUserProvider>
    <CurrentUserChecker>
      <Router>
        <App />
      </Router>
    </CurrentUserChecker>
  </CurrentUserProvider>,
  document.getElementById(`root`)
);
