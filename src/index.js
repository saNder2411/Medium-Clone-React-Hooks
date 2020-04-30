import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from 'routes';

function App() {
  return (
    <div className="App">
      <h3>Welcome to Hooks!</h3>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
