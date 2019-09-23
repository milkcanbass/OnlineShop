import React from 'react';
import './collectionPreview.styles.scss';

import CollectionItem from '../collectionItem/collectionItem.component';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collectionPreviewContainer">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
