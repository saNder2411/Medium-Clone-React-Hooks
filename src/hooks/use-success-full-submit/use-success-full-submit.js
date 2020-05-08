import {useState, useEffect, useContext} from 'react';
import useLocalStorage from '../use-local-storage/use-local-storage';
import {CurrentUserContext} from '../../contexts/current-user-context/current-user-context';
import {currentUserAuthorized} from '../../contexts/current-user-context/current-user-action-creator';


const useSuccessFullSubmit = (data) => {
  const [isSuccessFullSubmit, setIsSuccessFullSubmit] = useState(false);
  const [, setToken] = useLocalStorage(`token`);
  const [, dispatch] = useContext(CurrentUserContext);

  useEffect(() => {
    if (data) {
      setToken(data.user.token);
      setIsSuccessFullSubmit(true);
      dispatch(currentUserAuthorized(data.user));
    }
  }, [data, setToken, dispatch]);

  return isSuccessFullSubmit;
};

export default useSuccessFullSubmit;