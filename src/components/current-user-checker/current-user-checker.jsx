import {useEffect, useContext} from 'react';
import useLocalStorage from '../../hooks/use-local-storage/use-local-storage';
import useAuthConfig from '../../hooks/use-auth-config/use-auth-config';
import {useServiceSetUser} from '../../hooks/use-service/use-service';
import {CurrentUserContext} from '../../contexts/current-user/current-user';

const CurrentUserChecker = ({children}) => {
  const [token] = useLocalStorage(`token`);
  const [authConfig] = useAuthConfig(token);
  const [{data}, doRequest] = useServiceSetUser(authConfig);
  const [, setCurrentUserState] = useContext(CurrentUserContext);

  useEffect(() => {
    if (!token) {
      setCurrentUserState((state) => ({...state, loggedIn: false}));
      return;
    }

    doRequest();
    setCurrentUserState((state) => ({...state, loading: true}));
  }, [token, doRequest, setCurrentUserState]);

  useEffect(() => {
    if (!data) {
      return;
    }

    setCurrentUserState((state) => ({
      ...state,
      loading: false,
      loggedIn: true,
      currentUser: data.user,
    }));
  },[data, setCurrentUserState]);

  return children;
};

export default CurrentUserChecker;