import Axios from 'axios';

const createAPIService = (baseURL) => {
  const defaultOptions = {
    baseURL,
    timeout: 1000 * 10,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const instanceAPI = Axios.create(defaultOptions);

  instanceAPI.interceptors.request.use((config) => {
    const token = localStorage.getItem(`token`);
    config.headers.authorization = token ? `Token ${token}` : ``;

    return config;
  });

  return instanceAPI;
};

export default createAPIService;