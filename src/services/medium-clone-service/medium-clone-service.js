import createAPIService from '../create-api-service/create-api-service';

export default class MediumCloneService {

  _baseUrl = `https://conduit.productionready.io/api`;

  _API = createAPIService(this._baseUrl);

  _getResource = async (url) => {
    const res = await this._API.get(url);

    return res;
  };

  _postResource = async (url, sendData) => {
    const res = await this._API.post(url, sendData);

    return res;
  };

  _putResource = async (url, sendData) => {
    const res = await this._API.put(url, sendData);

    return res;
  };

  _deleteResource = async (url) => {
    const res = await this._API.delete(url);

    return res;
  };


  authorizesUser = async (url, userAuthData) => {
    const res = await this._postResource(url, userAuthData);

    return res;
  };

  getCurrentUser = async () => {
    const res = await this._getResource(`/user`);

    return res;
  };

  updateUserData = async (updatedData) => {
    const res = await this._putResource(`/user`, updatedData);

    return res;
  };

  getUserProfiles = async (urlSlug) => {
    const res = await this._getResource(`/profiles/${urlSlug}`);

    return res;
  };

  getTags = async () => {
    const res = await this._getResource(`/tags`);

    return res;
  };

  getAllArticles = async (stringifiedUrlParams) => {
    const res = await this._getResource(`/articles?${stringifiedUrlParams}`);

    return res;
  };

  getUserArticles = async (stringifiedUrlParams) => {
    const res = await this._getResource(`/articles/feed?${stringifiedUrlParams}`);

    return res;
  };

  getArticle = async (urlSlug) => {
    const res = await this._getResource(`/articles/${urlSlug}`);

    return res;
  };

  postUserArticle = async (articleData) => {
    const res = await this._postResource(`/articles`, articleData);

    return res;
  };

  updateUserArticle = async (urlSlug, updatedArticleData) => {
    const res = await this._putResource(`/articles/${urlSlug}`, updatedArticleData);

    return res;
  };

  deleteUserArticle = async (urlSlug) => {
    const res = await this._API.delete(`/articles/${urlSlug}`);

    return res;
  };

  addToFavoriteArticle = async (articleSlug) => {
    const res = await this._postResource(`/articles/${articleSlug}/favorite`);

    return res;
  };

  deleteOffFavoriteArticle = async (articleSlug) => {
    const res = await this._deleteResource(`/articles/${articleSlug}/favorite`);

    return res;
  };

}
