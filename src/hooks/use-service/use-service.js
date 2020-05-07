import {useCallback} from 'react';
import MediumCloneService from '../../services/medium-clone-service/medium-clone-service';
import useRequest from '../use-request/use-request';


const mediumCloneService = new MediumCloneService();

const useServiceAuthorizesUser = (url, userData) => {
  const request = useCallback(() => mediumCloneService.authorizesUser(url, userData), [url, userData]);

  return useRequest(request);
};

const useServiceSetUser = (authConfig) => {
  const request = useCallback(() => mediumCloneService.setUser(authConfig), [authConfig]);

  return useRequest(request);
};

const useServiceGetArticles = (stringifiedUrlParams) => {
  const request = useCallback(() => mediumCloneService.getArticles(stringifiedUrlParams), [stringifiedUrlParams]);

  return useRequest(request);
};

export {useServiceAuthorizesUser, useServiceSetUser, useServiceGetArticles};
