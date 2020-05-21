import React from 'react';
import {Link} from 'react-router-dom';
import TagList from '../tag-list/tag-list';
import {parseDateToString} from '../../utils/utils';
import AddToFavorite from '../add-to-favorite/add-to-favorite';


const FeedArticles = ({articles}) => {

  return (
    <div>
      {articles.map(({author, createdAt, slug, title, description, tagList, favorited, favoritesCount}) => (
        <div className="article-preview" key={slug}>
          <div className="article-meta">
            <Link to={`/profiles/${author.username}`}>
              <img src={author.image} alt="author avatar" />
            </Link>
            <div className="info">
              <Link className="author" to={`/profiles/${author.username}`}>
                {author.username}
              </Link>
              <span className="date">{parseDateToString(createdAt)}</span>
            </div>
            <div className="pull-xs-right">
              <AddToFavorite
                isFavorite={favorited}
                favoritesCount={favoritesCount}
                articleSlug={slug} />
            </div>
          </div>
          <Link className="preview-link" to={`/article/${slug}`}>
            <h1>{title}</h1>
            <p>{description}</p>
            <span>Read more...</span>
            <TagList tagList={tagList} />
          </Link>
        </div>
      ))}
    </div>
  );
};


export default FeedArticles;
