import React from 'react';
import {Route, Switch} from 'react-router-dom';

import FeedBanner from '../../components/feed-banner/feed-banner';
import FeedContainer from '../../components/feed-container/feed-container';
import GlobalFeedContent from '../../components/global-feed-content/global-feed-content';
import YourFeedContent from '../../components/your-feed-content/your-feed-content';
import TagFeedContent from '../../components/tag-feed-content/tag-feed-content';
import PopularTags from '../../components/popular-tags/popular-tags';


const GlobalFeed = () => (
  <div className="home-page">
    <FeedBanner />
    <FeedContainer>
      <Switch>
        <Route exact path="/" component={GlobalFeedContent} />
        <Route path="/feed" component={YourFeedContent} />
        <Route path="/tags/:slug" component={TagFeedContent} />
      </Switch>
      <PopularTags />
    </FeedContainer>
  </div>
);

export default GlobalFeed;
