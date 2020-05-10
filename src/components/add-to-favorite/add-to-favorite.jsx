import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import useService from '../../hooks/use-service/use-service';

const AddToFavorite = ({isFavorite, favoritesCount, articleSlug}) => {
  const [{isLoading: addLoading, data: addToData}, doRequestAddToFavorite] = useService(`addToFavoriteArticle`, articleSlug);
  const [{isLoading: deleteLoading,data: deleteOffData}, doRequestDeleteOffFavorite] = useService(`deleteOffFavoriteArticle`, articleSlug);
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  const [favoritesCountState, setFavoritesCountState] = useState(favoritesCount);
  const response = isFavoriteState ? addToData : deleteOffData;
  const buttonClasses = classNames({
    "btn": true,
    "btn-sm": true,
    "btn-primary": isFavoriteState,
    "btn-outline-primary": !isFavoriteState,
  });

  useEffect(()=> {
    if (!response) return;

    setFavoritesCountState(response.article.favoritesCount);
  }, [response])

  const handleLike = () => {
    if (isFavoriteState) {
      doRequestDeleteOffFavorite();
      setIsFavoriteState(false);
    } else {
      doRequestAddToFavorite();
      setIsFavoriteState(true);
    }
  };

  return (
    <button className={buttonClasses} onClick={handleLike} disabled={addLoading || deleteLoading}>
      <i className="ion-heart"></i>
      <span>&nbsp; {favoritesCountState}</span>
    </button>
  );
};

export default AddToFavorite;