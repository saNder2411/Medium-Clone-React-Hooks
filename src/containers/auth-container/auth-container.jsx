import React, {useState, useMemo, useContext} from 'react';
import Auth from '../../pages/auth/auth';
import useService from '../../hooks/use-service/use-service';
import useSuccessFullSubmit from '../../hooks/use-success-full-submit/use-success-full-submit';
import {CurrentUserContext} from '../../contexts/current-user-context/current-user-context';

const AuthContainer = ({match: {path}}) => {
  const [username, setUsername] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [, setCurrentUserState] = useContext(CurrentUserContext);

  const userData = useMemo(() => ({
    user: {username, email, password},
  }), [username, email, password]);

  const url = useMemo(() => (path === `/register` ? `/users` : `/users/login`), [path]);

  const [{loading, data, error}, doRequest] = useService(`authorizesUser`, url, userData);
  const isSuccessFullSubmit = useSuccessFullSubmit(data, setCurrentUserState);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    doRequest();
  };

  return (
    <Auth
      path={path}
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
