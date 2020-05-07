import React from 'react';


const FeedContainer = ({children}) => {
  const [Content, PopularTags] = children;

  return (
    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          {Content}
        </div>
        <div className="col-md-3">
          {PopularTags}
        </div>
      </div>
    </div>
  );

};

export default FeedContainer;