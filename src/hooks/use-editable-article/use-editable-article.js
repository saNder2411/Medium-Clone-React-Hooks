import {useState, useEffect} from 'react';
import useService from '../use-service/use-service';


const useEditableArticle = (urlSlug) => {
  const [{isLoading, data, error}, doRequest] = useService(`getArticle`, urlSlug);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => doRequest(), [doRequest, urlSlug]);
  useEffect(() => {
    if (!data) return;

    const {title, description, body, tagList} = data.article;
    setInitialValues({title, description, body, tagList});
  }, [data]);

  return [{isLoading, initialValues, error}];
};

export default useEditableArticle;
