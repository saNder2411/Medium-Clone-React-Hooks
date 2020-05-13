import React, {useState, useEffect, useContext} from 'react';
import {Redirect} from 'react-router-dom';

import useService from '../../hooks/use-service/use-service';
import {CurrentUserContext} from '../../contexts/current-user-context/current-user-context';
import ArticleForm from '../../components/article-from/article-from';


const CreateArticle = () => {
  const initialValues = {
    title: ``,
    description: ``,
    body: ``,
    tagList: [],
  };
  const [articleData, setArticleData] = useState(initialValues);
  const [isSuccessFullSubmit, setIsSuccessFullSubmit] = useState(false);
  const [{isLoggedIn}] = useContext(CurrentUserContext);
  const [{isLoading, data, error}, doRequest] = useService(`postUserArticle`, articleData);

  useEffect(() => {
    if (!data) return;

    setIsSuccessFullSubmit(true);
  }, [data]);


  const requestToAddArticle = (article) => {
    setArticleData(article);
    doRequest();
  };

  if (isLoggedIn === false) {
    return <Redirect to="/" />;
  }

  if (isSuccessFullSubmit) {
    return <Redirect to={`/article/${data.article.slug}`} />;
  }

  return (
    <ArticleForm
      isLoading={isLoading}
      error={error}
      initialValues={initialValues}
      onFormSubmit={requestToAddArticle} />
  );
};

export default CreateArticle;
