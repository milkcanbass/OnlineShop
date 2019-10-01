import React, { Suspense } from 'react';

const lazyLoadingImport = (Component) => (props) => (
  <Suspense fallback={<LoadingMessage />}>
    <Component {...props} />
  </Suspense>
);

const LoadingMessage = () => '';

export default lazyLoadingImport;
