import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import ServiceContext from 'service-context/service-context';
import MediumCloneService from 'services/medium-clone-service/medium-clone-service';

import App from 'components/app/app';

const mediumCloneService = new MediumCloneService();

ReactDOM.render(
  <React.StrictMode>
    <ServiceContext.Provider value={mediumCloneService}>
      <Router>
        <App />
      </Router>
    </ServiceContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
