export default class ApiService {

  constructor(apiProvider) {
    this._apiProvider = apiProvider;
  }

  get authorizesUser() {
    return this._apiProvider.postResource;
  }

  getCurrentUser = async () => {
    const res = await this._apiProvider.getResource(`/user`);
    return res;
  };

  updateUserData = async (updatedData) => {
    const res = await this._apiProvider.putResource(`/user`, updatedData);
    return res;
  };

  getUserProfiles = async (urlSlug) => {
    const res = await this._apiProvider.getResource(`/profiles/${urlSlug}`);
    return res;
  };

  getTags = async () => {
    const res = await this._apiProvider.getResource(`/tags`);
    return res;
  };

  getAllArticles = async (stringifiedUrlParams) => {
    const res = await this._apiProvider.getResource(`/articles?${stringifiedUrlParams}`);
    return res;
  };

  getUserArticles = async (stringifiedUrlParams) => {
    const res = await this._apiProvider.getResource(`/articles/feed?${stringifiedUrlParams}`);
    return res;
  };

  getArticle = async (urlSlug) => {
    const res = await this._apiProvider.getResource(`/articles/${urlSlug}`);
    return res;
  };

  postUserArticle = async (articleData) => {
    const res = await this._apiProvider.postResource(`/articles`, articleData);
    return res;
  };

  updateUserArticle = async (urlSlug, updatedArticleData) => {
    const res = await this._apiProvider.putResource(`/articles/${urlSlug}`, updatedArticleData);
    return res;
  };

  deleteUserArticle = async (urlSlug) => {
    const res = await this._apiProvider.deleteResource(`/articles/${urlSlug}`);
    return res;
  };

  addToFavoriteArticle = async (articleSlug) => {
    const res = await this._apiProvider.postResource(`/articles/${articleSlug}/favorite`);
    return res;
  };

  deleteOffFavoriteArticle = async (articleSlug) => {
    const res = await this._apiProvider.deleteResource(`/articles/${articleSlug}/favorite`);
    return res;
  };


}
