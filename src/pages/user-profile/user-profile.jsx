import React, { useEffect } from 'react';
import useService from '../../hooks/use-service/use-service';
import LoadingDataView from '../../components/loading-data-view/loading-data-view';
import UserProfileContent from '../../components/user-profile-content/user-profile-content';

const UserProfile = ({location: {pathname}, match: {params}}) => {
  const {slug: urlSlug} = params;
  const isFavorites = pathname.includes(`favorites`);
  const [{isLoading, data, error}, doRequest] = useService(`getUserProfiles`, urlSlug);
  const {image = ``, username = ``, bio = ``} = data ? data.profile : {};

  useEffect(() => doRequest(), [doRequest, urlSlug]);

  return (
    <div className="profile-page">
      <LoadingDataView isLoading={isLoading} error={error} />
      {!data ? null : (
        <UserProfileContent
          isFavorites={isFavorites}
          image={image}
          username={username}
          bio={bio} />)}
    </div>
  );
};

export default UserProfile;