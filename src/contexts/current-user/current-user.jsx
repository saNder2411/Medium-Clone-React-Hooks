import React, {createContext, useState} from 'react';

export const CurrentUserContext = createContext([{}, () => {}]);

export const CurrentUserProvider = ({children}) => {
  const [currentUserState, setCurrentUserState] = useState({
    loading: false,
    loggedIn: null,
    currentUser: null,
  });

  return (
    <CurrentUserContext.Provider value={[currentUserState, setCurrentUserState]}>
      {children}
    </CurrentUserContext.Provider>
  );
};