import React from 'react';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

const LoadingDataView = ({loading, error}) => {
  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorIndicator /> : null;

  return spinner || errorMessage;
};

export default LoadingDataView;