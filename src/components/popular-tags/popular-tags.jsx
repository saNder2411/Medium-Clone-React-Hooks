import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import useService from '../../hooks/use-service/use-service';
import LoadingDataView from '../loading-data-view/loading-data-view';


const PopularTags = () => {
  const [{loading, data, error}, doRequest] = useService(`getTags`);
  const hasData = !(loading || error) && data;

  useEffect(() => doRequest(), [doRequest]);

  return (
    <div className="sidebar">
      <p>Popular tags</p>
      <div className="tag-list">
        <LoadingDataView loading={loading} error={error} />
        {!hasData ? null : data.tags.map((tag) => (
          <Link className="tag-default tag-pill" to={`/tags/${tag}`} key={tag}>
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;