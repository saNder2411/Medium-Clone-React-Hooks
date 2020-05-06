import React, {useContext, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/current-user/current-user';

const TopBar = () => {
  const [{loggedIn, currentUser}] = useContext(CurrentUserContext);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Medium
        </NavLink>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          {loggedIn ? (
            <Fragment>
              <li className="nav-item">
                <NavLink to="/articles/new" className="nav-link">
                  <i className="ion-compose"></i>
                  &nbsp; New Post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/profiles/${currentUser.username}`} className="nav-link">
                  <img className="user-pic" src={currentUser.image} alt="avatar"/>
                  &nbsp; {currentUser.username}
                </NavLink>
              </li>
            </Fragment>
          ) : (
            <Fragment>
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
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
