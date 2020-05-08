import React from 'react';
import Routes from '../../routes/routes';
import TopBar from '../top-bar/top-bar';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Routes />
    </div>
  );
};

export default App;
