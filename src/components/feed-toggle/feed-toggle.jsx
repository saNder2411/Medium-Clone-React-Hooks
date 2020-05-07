import React from 'react';
import { NavLink } from 'react-router-dom';

const FeedToggle = ({tag}) => {

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
        {!tag ? null : (
        <li className="nav-item">
          <NavLink className="nav-link" to={`/tags/${tag}`}>
            <i className="ion-pound"></i>
            {tag}
          </NavLink>
        </li>)}
      </ul>
    </div>
  );
};

export default FeedToggle;