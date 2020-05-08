import React from 'react';
import {Route, Switch} from 'react-router-dom';
import GlobalFeed from '../pages/global-feed/global-feed';
import AuthContainer from '../containers/auth-container/auth-container';
import ArticleContainer from '../containers/article-container/article-container';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={GlobalFeed} /> 
      <Route path="/feed" component={GlobalFeed} />
      <Route path="/tags/:slug" component={GlobalFeed} />
      <Route path="/login" component={AuthContainer} />
      <Route path="/register" component={AuthContainer} />
      <Route path="/articles/:slug" component={ArticleContainer} />
    </Switch>
  );
};

export default Routes;