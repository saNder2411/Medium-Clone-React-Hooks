import {useEffect} from 'react';

const useCheckCurrentUser = (token, data, doRequest, setCurrentUserState) => {
  useEffect(() => {
    if (!token) {
      setCurrentUserState((state) => ({...state, isLoggedIn: false}));
      return;
    }

    doRequest();
    setCurrentUserState((state) => ({...state, isLoading: true}));
  }, [token, doRequest, setCurrentUserState]);

  useEffect(() => {
    if (!data) {
      return;
    }

    setCurrentUserState((state) => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: data.user,
    }));
  },[data, setCurrentUserState]);

};

export default useCheckCurrentUser;