import React from 'react';
import {Link} from 'react-router-dom';
import TagList from '../tag-list/tag-list';

const FeedArticles = ({articles}) => {

  return (
    <div>
      {articles.map(({author, createdAt, slug, title, description, tagList}, i) => (
        <div className="article-preview" key={i}>
          <div className="article-meta">
            <Link to={`/profiles/${author.username}`}>
              <img src={author.image} alt="author avatar" />
            </Link>
            <div className="info">
              <Link className="author" to={`/profiles/${author.username}`}>
                {author.username}
              </Link>
              <span className="date">{createdAt}</span>
            </div>
          </div>
          <Link className="preview-link" to={`/articles/${slug}`}>
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