import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import useService from '../../hooks/use-service/use-service';
import LoadingDataView from '../../components/loading-data-view/loading-data-view';
import TagList from '../../components/tag-list/tag-list';


const Article = ({match: {params}}) => {
  const urlSlug = params.slug
  const [{isLoading, data, error}, doRequest] = useService(`getArticle`, urlSlug);
  const hasData = !(isLoading || error) && data;

  useEffect(() => doRequest(), [doRequest, urlSlug]);

  return (
    <div className="article-page">
      <div className ="banner">
      <LoadingDataView isLoading={isLoading} error={error} />
      {!hasData ? null : (
        <div className="container">
          <h1>{data.article.title}</h1>
          <div className="article-meta">
            <Link to={`/profiles/${data.article.author.username}`}>
              <img src={data.article.author.image} alt="author avatar" />
            </Link>
            <div className="info">
              <Link to={`/profiles/${data.article.author.username}`}>
                {data.article.author.username}
              </Link>
              <span className="date">
                {data.article.createdAt}
              </span>
            </div>
          </div>
        </div>
      )}
      </div>
      <div className="container page">
        <LoadingDataView isLoading={isLoading} error={error} />
        {!hasData ? null : (
          <div className="row article-content">
            <div className="col-xs-12">
              <div>
                <p>{data.article.body}</p>
              </div>
              <TagList tagList={data.article.tagList} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;