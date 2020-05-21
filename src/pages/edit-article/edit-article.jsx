import React, {useState, useEffect, useContext} from 'react';
import {Redirect} from 'react-router-dom';

import useService from '../../hooks/use-service/use-service';
import useEditableArticle from '../../hooks/use-editable-article/use-editable-article';
import {CurrentUserContext} from '../../contexts/current-user-context/current-user-context';

import LoadingDataView from '../../components/loading-data-view/loading-data-view';
import ArticleForm from '../../components/article-from/article-from';


const EditArticle = ({match: {params}}) => {

  const {slug: urlSlug} = params;
  const [{isLoading: isLoadingEditableArticle, initialValues, error: editableArticleError}] = useEditableArticle(urlSlug);
  const hasEditableArticleData = !(isLoadingEditableArticle || editableArticleError) && initialValues;

  const [updatedArticleData, setUpdatedArticleData] = useState(null);
  const [isSuccessFullSubmit, setIsSuccessFullSubmit] = useState(false);
  const [{isLoggedIn}] = useContext(CurrentUserContext);
  const [{isLoading, data, error}, doRequest] = useService(`updateUserArticle`, urlSlug, updatedArticleData);

  useEffect(() => {
    if (!data) return;

    setIsSuccessFullSubmit(true);
  }, [data]);

  const requestToUpdateArticle = (updatedArticle) => {
    setUpdatedArticleData(updatedArticle);
    doRequest();
  };

  if (isLoggedIn === false) {
    return <Redirect to="/" />;
  }

  if (isSuccessFullSubmit) {
    return <Redirect to={`/article/${urlSlug}`} />;
  }

  return (
    <>
      <LoadingDataView isLoading={isLoadingEditableArticle} error={editableArticleError} />
      {!hasEditableArticleData ? null : (
        <ArticleForm
          isLoading={isLoading}
          error={error}
          initialValues={initialValues}
          onFormSubmit={requestToUpdateArticle} />
      )}
    </>
  );
};

export default EditArticle;
