import React, {useEffect} from 'react';
import {stringify} from 'query-string';

import useService from '../../hooks/use-service/use-service';
import {getPagination, LIMIT} from '../../utils/utils';

import FeedToggle from '../feed-toggle/feed-toggle';
import LoadingDataView from '../loading-data-view/loading-data-view';
import FeedArticles from '../feed-articles/feed-articles';
import Pagination from '../pagination/pagination';


const YourFeedContent = ({location: {search}, match: {url}}) => {

  const {currentPage, offset} = getPagination(search);
  const stringifiedUrlParams = stringify({limit: LIMIT, offset});
  const [{isLoading, data, error}, doRequest] = useService(`getUserArticles`, stringifiedUrlParams);
  const hasData = !(isLoading || error) && data;

  useEffect(() => doRequest(), [doRequest, stringifiedUrlParams]);

  return (
    <>
      <FeedToggle />
      <LoadingDataView isLoading={isLoading} error={error} />
      {!hasData ? null : (
        <>
          <FeedArticles articles={data.articles} />
          <Pagination
            url={url}
            limit={LIMIT}
            total={data.articlesCount}
            currentPage={currentPage} />
        </>
      )}
    </>
  );
};

export default YourFeedContent;
