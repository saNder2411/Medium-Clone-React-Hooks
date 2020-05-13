import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";
import {stringify} from "query-string";

import useService from "../../hooks/use-service/use-service";
import {getPagination, LIMIT} from "../../utils/utils";

import LoadingDataView from "../loading-data-view/loading-data-view";
import FeedArticles from "../feed-articles/feed-articles";
import Pagination from "../pagination/pagination";

const getStringifiedUrlParams = ({username, offset, isFavorites}) => {
  const params = isFavorites
    ? {limit: LIMIT, offset, favorited: username}
    : {limit: LIMIT, offset, author: username};

  return stringify(params);
};

const UserArticles = ({username, location: {pathname, search}}) => {
  const isFavorites = pathname.includes(`favorites`);
  const {currentPage, offset} = getPagination(search);
  const stringifiedUrlParams = getStringifiedUrlParams({username, offset, isFavorites});
  const [{isLoading, data, error}, doRequest] = useService(`getAllArticles`, stringifiedUrlParams);
  useEffect(() => doRequest(), [doRequest, stringifiedUrlParams]);

  return (
    <div>
      <LoadingDataView isLoading={isLoading} error={error} />
      {!data ? null : (
        <>
          <FeedArticles articles={data.articles} />
          <Pagination
            url={pathname}
            limit={LIMIT}
            total={data.articlesCount}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default withRouter(UserArticles);
