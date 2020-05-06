import React, {useState, useMemo, useContext} from 'react';
import Auth from '../../pages/auth/auth';
import {useAuthorizesUser} from '../../hooks/use-service/use-service';
import useSuccessFullSubmit from '../../hooks/use-success-full-submit/use-success-full-submit';
import {CurrentUserContext} from '../../contexts/current-user/current-user';

const AuthContainer = ({match}) => {
  const [username, setUsername] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [, setCurrentUserState] = useContext(CurrentUserContext);

  const userData = useMemo(() => ({
    user: {username, email, password},
  }), [username, email, password]);

  const url = useMemo(() => (match.path === `/register` ? `users` : `users/login`), [match.path]);

  const [{loading, data, error}, doRequest] = useAuthorizesUser(url, userData);
  const isSuccessFullSubmit = useSuccessFullSubmit(data, setCurrentUserState);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    doRequest();
  };

  return (
    <Auth
      path={match.path}
      username={username}
      email={email}
      password={password}
      loading={loading}
      isSuccessFullSubmit={isSuccessFullSubmit}
      error={error}
      setUsername={setUsername}
      setEmail={setEmail}
      setPassword={setPassword}
      onFormSubmit={handleFormSubmit}
    />
  );
};

export default AuthContainer;
