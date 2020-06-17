import createAPIService from "../create-api-service/create-api-service";

export default class ApiProvider {

  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this._API = createAPIService(this._baseUrl);
  }

  getResource = async (url) => {
    const res = await this._API.get(url);
    return res;
  };

  postResource = async (url, sendData) => {
    const res = await this._API.post(url, sendData);
    return res;
  };

  putResource = async (url, sendData) => {
    const res = await this._API.put(url, sendData);
    return res;
  };

  deleteResource = async (url) => {
    const res = await this._API.delete(url);
    return res;
  };

}
