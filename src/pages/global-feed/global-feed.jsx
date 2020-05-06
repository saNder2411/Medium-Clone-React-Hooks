import React, {useEffect} from 'react';
import {useServiceGetArticles} from '../../hooks/use-service/use-service';
import Spinner from '../../components/spinner/spinner';
import Errors from '../../components/errors/errors';
import Feed from '../../components/feed/feed';

const GlobalFeed = () => {
   const [{loading, data, error}, doRequest] = useServiceGetArticles();

   useEffect(() => doRequest(), [doRequest]);

   const hasData = !(loading || error) && data;
   const spinner = loading ? <Spinner /> : null;
   const errorMessage = error ? <Errors errors={error.data.errors} /> : null;
   const content = hasData ? <Feed articles={data.articles} /> : null;

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Medium Clone</h1>
          <p>A place to share knowledge</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            {spinner}
            {errorMessage}
            {content}
          </div>
          <div className="col-md-3">
            Popular tags
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeed;