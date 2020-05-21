import React, {useState, useMemo} from 'react';
import {Redirect} from 'react-router-dom';
import Auth from '../../pages/auth/auth';
import useService from '../../hooks/use-service/use-service';
import useSuccessFullSubmit from '../../hooks/use-success-full-submit/use-success-full-submit';


const AuthContainer = ({match: {path}}) => {

  const [username, setUsername] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [userData, setUserData] = useState(null);

  const url = useMemo(() => (path === `/register` ? `/users` : `/users/login`), [path]);

  const [{isLoading, data, error}, doRequest] = useService(`authorizesUser`, url, userData);
  const isSuccessFullSubmit = useSuccessFullSubmit(data);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setUserData({
      user: {username, email, password},
    });
    doRequest();
  };

  if (isSuccessFullSubmit) {
    return <Redirect to="/" />;
  }

  return (
    <Auth
      path={path}
      username={username}
      email={email}
      password={password}
      isLoading={isLoading}
      error={error}
      onUsernameChange={setUsername}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onFormSubmit={handleFormSubmit} />
  );
};

export default AuthContainer;
