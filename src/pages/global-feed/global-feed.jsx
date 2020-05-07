import React, {useEffect, Fragment} from 'react';
import {stringify} from 'query-string';

import useService from '../../hooks/use-service/use-service';
import {getPagination, LIMIT} from '../../utils/utils';

import FeedToggle from '../../components/feed-toggle/feed-toggle';
import ResponseState from '../../components/response-state/response-state';
import Feed from '../../components/feed/feed';
import Pagination from '../../components/pagination/pagination';
import PopularTags from '../../components/popular-tags/popular-tags';


const GlobalFeed = ({location: {search}, match: {url}}) => {
  const {currentPage, offset} = getPagination(search);
  const stringifiedUrlParams = stringify({limit: LIMIT, offset});
  const [{loading, data, error}, doRequest] = useService(`getArticles`, stringifiedUrlParams);
  const hasData = !(loading || error) && data;

  useEffect(() => doRequest(), [doRequest, stringifiedUrlParams]);

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
            <FeedToggle />
            <ResponseState loading={loading} error={error} />
            {!hasData ? null : (
              <Fragment>
                <Feed articles={data.articles} />
                <Pagination
                  url={url}
                  limit={LIMIT}
                  total={data.articlesCount}
                  currentPage={currentPage} />
              </Fragment>
              )}
          </div>
          <div className="col-md-3">
            <PopularTags />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeed;