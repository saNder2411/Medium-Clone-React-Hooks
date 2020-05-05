import Axios from 'axios';

export default class MediumCloneService {

  _baseUrl = `https://conduit.productionready.io/api/`;

  _API = Axios.create({
    baseURL: this._baseUrl,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  getResourceForUseFetch = async (url, {method = `get`, data = {}}) => {
    const res = await this._API[method](url, data);

    return res;

  };

  _postResource = async (url, sendData) => {
    const res = await this._API.post(url, sendData);

    return res;
  };

  authorizesUser = async (url, userAuthData) => {
    const res = await this._postResource(url, userAuthData);

    return res;
  };
}