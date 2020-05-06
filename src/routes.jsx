import React from 'react';
import {Route, Switch} from 'react-router-dom';
import GlobalFeed from './pages/global-feed/global-feed';
import Article from './pages/article/article';
import AuthContainer from './containers/auth-container/auth-container';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={GlobalFeed} />
      <Route path="/login" component={AuthContainer} />
      <Route path="/register" component={AuthContainer} />
      <Route path="/articles/:slug" component={Article} />
    </Switch>
  );
};

export default Routes;