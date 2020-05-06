import Axios from 'axios';

export default class MediumCloneService {

  _baseUrl = `https://conduit.productionready.io/api`;

  _API = Axios.create({
    baseURL: this._baseUrl,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  _postResource = async (url, sendData) => {
    const res = await this._API.post(url, sendData);

    return res;
  };

  _getResource = async (url) => {
    const res = await this._API.get(url);

    return res;
  };

  authorizesUser = async (url, userAuthData) => {
    const res = await this._postResource(url, userAuthData);

    return res;
  };

  setUser = async (authConfig) => {
    const res = await this._API(`/user`, authConfig);

    return res;
  };
}