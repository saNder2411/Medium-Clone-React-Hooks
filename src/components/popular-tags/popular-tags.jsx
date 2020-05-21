import React, {useEffect, memo} from 'react';
import {Link} from 'react-router-dom';
import useService from '../../hooks/use-service/use-service';
import LoadingDataView from '../loading-data-view/loading-data-view';


const PopularTags = () => {

  const [{isLoading, data, error}, doRequest] = useService(`getTags`);
  const hasData = !(isLoading || error) && data;

  useEffect(() => doRequest(), [doRequest]);

  return (
    <div className="sidebar">
      <p>Popular tags</p>
      <div className="tag-list">
        <LoadingDataView isLoading={isLoading} error={error} />
        {!hasData ? null : data.tags.map((tag) => (
          <Link className="tag-default tag-pill" to={`/tags/${tag}`} key={tag}>
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default memo(PopularTags);
