import React, {useContext, useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import useService from '../../hooks/use-service/use-service';
import useLocalStorage from '../../hooks/use-local-storage/use-local-storage';
import {CurrentUserContext} from '../../contexts/current-user-context/current-user-context';
import {currentUserAuthorized, currentUserLogout} from '../../contexts/current-user-context/current-user-action-creator';

import Settings from '../../pages/settings/settings';


const SettingsContainer = () => {
  const [{currentUser}, dispatch] = useContext(CurrentUserContext);
  const [imageState, setImageState] = useState(``);
  const [usernameState, setUsernameState] = useState(``);
  const [bioState, setBioState] = useState(``);
  const [emailState, setEmailState] = useState(``);
  const [passwordState, setPasswordState] = useState(``);
  const [updatedUserData, setUpdatedUserData] = useState(null);
  const [{isLoading, data, error}, doRequest] = useService(`updateUserData`, updatedUserData);

  const [, setToken] = useLocalStorage(`token`);
  const [isSuccessFullLogout, setIsSuccessFullLogout] = useState(false);
  const [isSuccessFullSubmit, setIsSuccessFullSubmit] = useState(false);

  useEffect(() => {
    if (!currentUser) return;

    const {image, username, bio, email} = currentUser;
    setImageState(image || ``);
    setUsernameState(username);
    setBioState(bio || ``);
    setEmailState(email);
  }, [currentUser]);

  useEffect(() => {
    if (!data) return;

    dispatch(currentUserAuthorized(data.user));
    setIsSuccessFullSubmit(true);
  }, [data, dispatch]);

  const handelFormSubmit = (evt) => {
    evt.preventDefault();
    setUpdatedUserData({
      user: {...currentUser, imageState, usernameState, bioState, emailState, passwordState},
    });
    doRequest();
  };
  const handleButtonLogoutClick = () => {
    setToken(``);
    dispatch(currentUserLogout());
    setIsSuccessFullLogout(true);
  };

  if (isSuccessFullLogout || isSuccessFullSubmit) {
    return <Redirect to="/" />;
  }

  return !currentUser ? null : (
    <Settings
      isLoading={isLoading}
      error={error}
      image={imageState}
      setImage={setImageState}
      username={usernameState}
      setUsername={setUsernameState}
      bio={bioState}
      setBio={setBioState}
      email={emailState}
      setEmail={setEmailState}
      password={passwordState}
      setPassword={setPasswordState}
      onFormSubmit={handelFormSubmit}
      onButtonLogoutClick={handleButtonLogoutClick} />
  );
};

export default SettingsContainer;
