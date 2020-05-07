import React from 'react';
import { NavLink } from 'react-router-dom';

const FeedToggle = ({tagName}) => {

  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <NavLink className="nav-link" to="/feed">
            Your feed
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>
            Global feed
          </NavLink>
        </li>
        {!tagName ? null : (
        <li className="nav-item">
          <NavLink className="nav-link" to={`/tags/${tagName}`}>
            <i className="ion-pound"></i>
            {tagName}
          </NavLink>
        </li>)}
      </ul>
    </div>
  );
};

export default FeedToggle;