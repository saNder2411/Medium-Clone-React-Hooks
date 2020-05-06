import {useState, useEffect} from 'react';

const useAuthConfig = (token) => {
  const [authConfig, setAuthConfig] = useState({
    headers: {
      authorization: ``,
    },
  });

  useEffect(() => {
    if (token) {
      setAuthConfig({
        headers: {
          authorization: `Token ${token}`,
        },
      });
    }
  }, [token])

  return [authConfig];

};

export default useAuthConfig;