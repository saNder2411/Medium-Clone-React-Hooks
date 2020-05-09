import CurrentUserActionTypes from './current-user-action-types';


const currentUserReducer = (state, action) => {

  switch (action.type) {
    case CurrentUserActionTypes.FETCH_USER_REQUEST:
      return {...state, isLoading: true};

    case CurrentUserActionTypes.FETCH_USER_AUTHORIZED:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        currentUser: action.payload,
      };

    case CurrentUserActionTypes.FETCH_USER_UNAUTHORIZED:
      return {...state, isLoggedIn: false};

    case CurrentUserActionTypes.USER_LOGOUT:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        currentUser: null,
      };

    default:
      return state;
  }
};

export default currentUserReducer;