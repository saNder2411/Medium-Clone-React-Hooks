import React, {useEffect, Fragment} from 'react';
import useService from '../../hooks/use-service/use-service';
import LoadingDataView from '../../components/loading-data-view/loading-data-view';
import Article from '../../pages/article/article';


const ArticleContainer = ({match: {params}}) => {
  const {slug: urlSlug} = params;
  const [{isLoading, data, error}, doRequest] = useService(`getArticle`, urlSlug);
  const hasData = !(isLoading || error) && data;

  useEffect(() => doRequest(), [doRequest, urlSlug]);

  return (
    <Fragment>
      <LoadingDataView isLoading={isLoading} error={error} />
      {!hasData ? null : <Article {...data.article}/>}
    </Fragment>
  );
};

export default ArticleContainer;