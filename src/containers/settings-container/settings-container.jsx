import React, {useContext, useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import useService from '../../hooks/use-service/use-service';
import useLocalStorage from '../../hooks/use-local-storage/use-local-storage';
import {CurrentUserContext} from '../../contexts/current-user-context/current-user-context';
import {currentUserAuthorized, currentUserLogout} from '../../contexts/current-user-context/current-user-action-creator';

import Settings from '../../pages/settings/settings';


const SettingsContainer = () => {
  const [{currentUser}, dispatch] = useContext(CurrentUserContext);
  const [image, setImage] = useState(``);
  const [username, setUsername] = useState(``);
  const [bio, setBio] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [updatedUserData, setUpdatedUserData] = useState(null);
  const [{isLoading, data, error}, doRequest] = useService(`updateUserData`, updatedUserData);

  const [, setToken] = useLocalStorage(`token`);
  const [isSuccessFullLogout, setIsSuccessFullLogout] = useState(false);
  const [isSuccessFullSubmit, setIsSuccessFullSubmit] = useState(false);

  useEffect(() => {
    if (!currentUser) return;

    const {image, username, bio, email} = currentUser;
    setImage(image ? image : ``);
    setUsername(username);
    setBio(bio ? bio : ``);
    setEmail(email);
  }, [currentUser]);

  useEffect(() => {
    if (!data) return;

    dispatch(currentUserAuthorized(data.user));
    setIsSuccessFullSubmit(true);
  }, [data, dispatch]);



  const handelFormSubmit = (evt) => {
    evt.preventDefault();
    setUpdatedUserData({
      user: {...currentUser, image, username, bio, email, password},
    });
    doRequest();
  };
  const handleButtonLogoutClick = () => {
    setToken(``);
    dispatch(currentUserLogout());
    setIsSuccessFullLogout(true);
  };

  if (isSuccessFullLogout || isSuccessFullSubmit) {
    return <Redirect to="/" />
  }

  return !currentUser ? null : (
    <Settings
      error={error}
      image={image}
      username={username}
      bio={bio}
      email={email}
      password={password}
      isLoading={isLoading}
      setImage={setImage}
      setUsername={setUsername}
      setBio={setBio}
      setEmail={setEmail}
      setPassword={setPassword}
      onFormSubmit={handelFormSubmit}
      onButtonLogoutClick={handleButtonLogoutClick} />
  );
};

export default SettingsContainer; 