import {useCallback} from 'react';
import MediumCloneService from '../../services/medium-clone-service/medium-clone-service';
import useRequest from '../use-request/use-request';


const mediumCloneService = new MediumCloneService();

const useService = (serviceMethod, ...args) => {
  const request = useCallback(() => mediumCloneService[serviceMethod](...args), [serviceMethod, args]);

  return useRequest(request);
};


export default useService;
