import React from 'react';
import {Route, Switch} from 'react-router-dom';
import GlobalFeed from '../pages/global-feed/global-feed';
import AuthContainer from '../containers/auth-container/auth-container';
import ArticleContainer from '../containers/article-container/article-container';
import CreateArticle from '../pages/create-article/create-article';
import EditArticle from '../pages/edit-article/edit-article';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={GlobalFeed} /> 
      <Route path="/feed" component={GlobalFeed} />
      <Route path="/tags/:slug" component={GlobalFeed} />
      <Route path="/login" component={AuthContainer} />
      <Route path="/register" component={AuthContainer} />
      <Route exact path="/article/new" component={CreateArticle} />
      <Route exact path="/article/:slug" component={ArticleContainer} />
      <Route path="/article/:slug/edit" component={EditArticle} />
    </Switch>
  );
};

export default Routes;