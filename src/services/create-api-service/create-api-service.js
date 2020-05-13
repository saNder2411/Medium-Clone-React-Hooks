import Axios from 'axios';

const createAPIService = (baseURL) => {
  const defaultOptions = {
    baseURL,
    timeout: 1000 * 10,
    withCredentials: true,
    headers: {
      'Content-Type': `application/json`,
    },
  };

  const instanceAPI = Axios.create(defaultOptions);

  instanceAPI.interceptors.request.use((config) => {
    const token = localStorage.getItem(`token`);
    const newConfig = {
      ...config,
      headers: {
        ...config.headers,
        authorization: token ? `Token ${token}` : ``,
      },
    };

    return newConfig;
  });

  return instanceAPI;
};

export default createAPIService;
