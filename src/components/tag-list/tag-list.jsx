import React from 'react';


const TagList = ({tagList}) => {

  return (
    <ul className="tag-list">
      {tagList.map((tag) => (
        <li className="tag-default tag-pill tag-outline" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
