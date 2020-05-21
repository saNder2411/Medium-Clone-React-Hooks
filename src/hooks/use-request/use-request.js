import {useState, useEffect, useCallback} from 'react';


const useRequest = (request) => {

  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const updateState = ({isLoading = true, data = null, error = null} = {}) => {
    setLoading(isLoading);
    setData(data);
    setError(error);
  };

  const doRequest = useCallback(() => updateState(), []);

  useEffect(() => {
    let cancelled = false;

    if (isLoading) {
      request()
        .then(({data}) => !cancelled && updateState({isLoading: false, data, error: null}))
        .catch(({response}) => !cancelled && updateState({isLoading: false, data: null, error: response}));
    }

    return () => {
      cancelled = true;
    };
  }, [isLoading, request]);

  return [{isLoading, data, error}, doRequest];
};

export default useRequest;
