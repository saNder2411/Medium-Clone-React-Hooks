import {useState, useEffect} from 'react';
import useLocalStorage from '../use-local-storage/use-local-storage';


const useSuccessFullSubmit = (data, setCurrentUserState) => {
  const [isSuccessFullSubmit, setIsSuccessFullSubmit] = useState(false);
  const [, setToken] = useLocalStorage(`token`);

  useEffect(() => {
    if (data) {
      setToken(data.user.token);
      setIsSuccessFullSubmit(true);
      setCurrentUserState((state) => ({
        ...state,
        isLoading: false,
        isLoggedIn: true,
        currentUser: data.user,
      }));
    }
  }, [data, setToken, setCurrentUserState]);

  return isSuccessFullSubmit;
};

export default useSuccessFullSubmit;