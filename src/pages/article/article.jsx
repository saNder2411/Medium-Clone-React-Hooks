import React from 'react';
import {Link} from 'react-router-dom';
import TagList from '../../components/tag-list/tag-list';


const Article = ({title, author, createdAt, body, tagList}) => {

  return (
    <div className="article-page">
      <div className ="banner">
        <div className="container">
          <h1>{title}</h1>
          <div className="article-meta">
            <Link to={`/profiles/${author.username}`}>
              <img src={author.image} alt="author avatar" />
            </Link>
            <div className="info">
              <Link to={`/profiles/${author.username}`}>
                {author.username}
              </Link>
              <span className="date">
                {createdAt}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container page">
        <div className="row article-content">
          <div className="col-xs-12">
            <div>
              <p>{body}</p>
            </div>
            <TagList tagList={tagList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;