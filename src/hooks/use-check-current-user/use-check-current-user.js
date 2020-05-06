import {useEffect} from 'react';

const useCheckCurrentUser = (token, data, doRequest, setCurrentUserState) => {
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

};

export default useCheckCurrentUser;