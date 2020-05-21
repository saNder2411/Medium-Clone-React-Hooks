import {useEffect, useContext} from 'react';
import {CurrentUserContext} from '../../contexts/current-user-context/current-user-context';
import {currentUserRequest, currentUserAuthorized, currentUserUnauthorized} from
  '../../contexts/current-user-context/current-user-action-creator';

const useCheckCurrentUser = (token, data, doRequest) => {

  const [, dispatch] = useContext(CurrentUserContext);
  useEffect(() => {
    if (!token) {
      dispatch(currentUserUnauthorized());
      return;
    }

    doRequest();
    dispatch(currentUserRequest());
  }, [token, doRequest, dispatch]);

  useEffect(() => {
    if (!data) return;

    dispatch(currentUserAuthorized(data.user));
  }, [data, dispatch]);
};

export default useCheckCurrentUser;
