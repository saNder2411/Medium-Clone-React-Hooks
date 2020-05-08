import React, {createContext, useState} from 'react';

const CurrentUserContext = createContext([{}, () => {}]);

const CurrentUserProvider = ({children}) => {
  const [currentUserState, setCurrentUserState] = useState({
    isLoading: false,
    isLoggedIn: null,
    currentUser: null,
  });

  return (
    <CurrentUserContext.Provider value={[currentUserState, setCurrentUserState]}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export {CurrentUserContext, CurrentUserProvider};