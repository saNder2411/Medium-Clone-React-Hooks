import React from 'react';
import ArticleForm from '../../components/article-from/article-from';


const CreateArticle = () => {
  const errors = {};
  const initialValues = {};
  const handleFormSubmit = (data) => console.log(`handleFormSubmit`, data);

  return (
    <div>
      <ArticleForm errors={errors} initialValues={initialValues} onFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreateArticle;