import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import useService from '../../hooks/use-service/use-service';

const AddToFavorite = ({isFavorite, favoritesCount, articleSlug}) => {
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  const [favoritesCountState, setFavoritesCountState] = useState(favoritesCount);
  const serviceMethod = isFavoriteState ? `deleteOffFavoriteArticle` : `addToFavoriteArticle`;

  const [{isLoading, data}, doRequest] = useService(serviceMethod, articleSlug);
  const buttonClasses = classNames({
    'btn': true,
    'btn-sm': true,
    'btn-primary': isFavoriteState,
    'btn-outline-primary': !isFavoriteState,
  });

  useEffect(() => {
    if (!data) return;

    setFavoritesCountState(data.article.favoritesCount);
    setIsFavoriteState(data.article.favorited);
  }, [data]);

  return (
    <button className={buttonClasses} type="button" onClick={doRequest} disabled={isLoading}>
      <i className="ion-heart" />
      <span>
        &nbsp;
        {favoritesCountState}
      </span>
    </button>
  );
};

export default AddToFavorite;
