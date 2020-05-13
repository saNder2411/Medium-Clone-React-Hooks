import React, {createContext, useReducer} from 'react';
import currentUserReducer from './current-user-reducer';

const initialState = {
  isLoading: false,
  isLoggedIn: null,
  currentUser: null,
};

const CurrentUserContext = createContext();

const CurrentUserProvider = ({children}) => {
  const value = useReducer(currentUserReducer, initialState);

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export {CurrentUserContext, CurrentUserProvider};
