import React from 'react';

import FeedBanner from '../../components/feed-banner/feed-banner';
import FeedContainer from '../../components/feed-container/feed-container';
import TagFeedContent from '../../components/tag-feed-content/tag-feed-content';
import PopularTags from '../../components/popular-tags/popular-tags';


const TagFeed = ({location, match}) => {

  return (
    <div className="home-page">
      <FeedBanner />
      <FeedContainer>
        <TagFeedContent location={location} match={match} /> 
        <PopularTags />
      </FeedContainer>
    </div>
  );
};

export default TagFeed;