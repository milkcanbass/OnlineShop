import React from 'react';
import './collectionPreview.styles.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collectionPreviewContainer">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview" />
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <div key={item.id}> {item.name} </div>
        ))}
    </div>
  );
};

export default CollectionPreview;
