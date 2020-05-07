import React, {useEffect, Fragment} from 'react';
import {stringify} from 'query-string';

import useService from '../../hooks/use-service/use-service';
import {getPagination, LIMIT} from '../../utils/utils';

import FeedToggle from '../../components/feed-toggle/feed-toggle';
import LoadingDataView from '../loading-data-view/loading-data-view';
import FeedArticles from '../feed-articles/feed-articles';
import Pagination from '../pagination/pagination';

const GlobalFeedContent = ({location: {search}, match: {url}}) => {
  const {currentPage, offset} = getPagination(search);
  const stringifiedUrlParams = stringify({limit: LIMIT, offset});
  const [{loading, data, error}, doRequest] = useService(`getArticles`, stringifiedUrlParams);
  const hasData = !(loading || error) && data;

  useEffect(() => doRequest(), [doRequest, stringifiedUrlParams]);

  return (
    <Fragment>
      <FeedToggle />
      <LoadingDataView loading={loading} error={error} />
      {!hasData ? null : (
        <Fragment>
          <FeedArticles articles={data.articles} />
          <Pagination
            url={url}
            limit={LIMIT}
            total={data.articlesCount}
            currentPage={currentPage} />
        </Fragment>
        )}
    </Fragment>
  );

};

export default GlobalFeedContent;