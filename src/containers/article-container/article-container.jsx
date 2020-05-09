import React, {useEffect, Fragment, useContext, useState} from 'react';
import {Redirect} from 'react-router-dom';

import useService from '../../hooks/use-service/use-service';
import {CurrentUserContext} from '../../contexts/current-user-context/current-user-context';

import LoadingDataView from '../../components/loading-data-view/loading-data-view';
import Article from '../../pages/article/article';


const ArticleContainer = ({match: {params}}) => {
  const {slug: urlSlug} = params;
  const [{isLoading, data, error}, doRequest] = useService(`getArticle`, urlSlug);

  useEffect(() => doRequest(), [doRequest, urlSlug]);

  const hasData = !(isLoading || error) && data;
  const {title, author, createdAt, body, tagList, slug} = data ? data.article : {};
  const [{isLoggedIn, currentUser}] = useContext(CurrentUserContext);

  const getIsAuthor = () => {
    if (!data || !isLoggedIn) {
      return false;
    }

    return author.username === currentUser.username;
  };


  const [{data: deleteArticleData}, doRequestDeleteArticle] = useService(`deleteUserArticle`, urlSlug);
  const [isSuccessFullDelete, setIsSuccessFullDelete] = useState(false);

  useEffect(() => {
    if (!deleteArticleData) return;

    setIsSuccessFullDelete(true);
  }, [deleteArticleData]);

  if (isSuccessFullDelete) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <LoadingDataView isLoading={isLoading} error={error} />
      {!hasData ? null : (
        <Article
          {...{title, author, createdAt, body, tagList, slug, isAuthor: getIsAuthor()}}
          onDeleteButtonClick={doRequestDeleteArticle} />)}
    </Fragment>
  );
};

export default ArticleContainer;