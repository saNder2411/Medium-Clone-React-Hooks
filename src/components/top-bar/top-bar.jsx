import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/current-user-context/current-user-context';

const TopBar = () => {

  const [{isLoggedIn, currentUser}] = useContext(CurrentUserContext);
  const userImage = (isLoggedIn && currentUser.image) || `https://static.productionready.io/images/smiley-cyrus.jpg`;

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Medium Clone
        </NavLink>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <NavLink to="/article/new" className="nav-link">
                  <i className="ion-compose" />
                  &nbsp; New Post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/settings" className="nav-link">
                  <i className="ion-gear-a" />
                  &nbsp; Settings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/profiles/${currentUser.username}`} className="nav-link">
                  <img className="user-pic" src={userImage} alt="avatar" />
                  &nbsp;
                  {` `}
                  {currentUser.username}
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Sign in
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Sign up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
