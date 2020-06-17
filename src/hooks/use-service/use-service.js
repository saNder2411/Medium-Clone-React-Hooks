import {useCallback} from 'react';
import useRequest from '../use-request/use-request';
import apiService from '../../services';


const useService = (serviceMethod, ...args) => {

  const request = useCallback(() => apiService[serviceMethod](...args), [serviceMethod, args]);

  return useRequest(request);
};


export default useService;
