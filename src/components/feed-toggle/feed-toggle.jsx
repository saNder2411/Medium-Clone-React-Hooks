import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/current-user-context/current-user-context';

const FeedToggle = ({tag}) => {
  const [{isLoggedIn}] = useContext(CurrentUserContext);
  const yourFeedLinkPath = isLoggedIn ? `/feed` : `/register`;

  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <NavLink className="nav-link" to={yourFeedLinkPath}>
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
              <i className="ion-pound" />
              {tag}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FeedToggle;
