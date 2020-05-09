import React, {useState, useMemo} from 'react';
import Auth from '../../pages/auth/auth';
import useService from '../../hooks/use-service/use-service';
import useSuccessFullSubmit from '../../hooks/use-success-full-submit/use-success-full-submit';

const AuthContainer = ({match: {path}}) => {
  const [username, setUsername] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const userData = useMemo(() => ({
    user: {username, email, password},
  }), [username, email, password]);

  const url = useMemo(() => (path === `/register` ? `/users` : `/users/login`), [path]);

  const [{isLoading, data, error}, doRequest] = useService(`authorizesUser`, url, userData);
  const isSuccessFullSubmit = useSuccessFullSubmit(data);

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
      isLoading={isLoading}
      isSuccessFullSubmit={isSuccessFullSubmit}
      error={error}
      onUsernameChange={setUsername}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onFormSubmit={handleFormSubmit}
    />
  );
};

export default AuthContainer;
