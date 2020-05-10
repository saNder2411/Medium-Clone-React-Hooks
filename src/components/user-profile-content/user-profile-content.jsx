import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';


const UserProfileContent = ({image, username, bio}) => {

  return (
    <Fragment>
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img className="user-img" src={image} alt="user avatar"/>
              <h4>{username}</h4>
              <p>{bio}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="article-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <NavLink className="nav-link" to={`/profiles/${username}`} exact>
                    My Post
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={`/profiles/${username}/favorites`}>
                    Favorites Post
                  </NavLink>
                </li>
              </ul>
            </div>
            user Article
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserProfileContent;