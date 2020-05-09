import CurrentUserActionTypes from './current-user-action-types';

export const currentUserRequest = () => ({type: CurrentUserActionTypes.FETCH_USER_REQUEST});

export const currentUserAuthorized = (user) => ({
  type: CurrentUserActionTypes.FETCH_USER_AUTHORIZED,
  payload: user,
});

export const currentUserUnauthorized = () => ({type: CurrentUserActionTypes.FETCH_USER_UNAUTHORIZED});

export const currentUserLogout = () => ({type: CurrentUserActionTypes.USER_LOGOUT});