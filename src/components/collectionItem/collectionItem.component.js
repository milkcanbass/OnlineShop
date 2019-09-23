import React from 'react';
import './collectionItem.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collectionItemContainer">
    <div className="image" style={{ background: `url(${imageUrl})` }} />
    <div className="collectionFooter">
      <span className="name">{name}</span>
      <span className="price">{price} </span>
    </div>
  </div>
);
export default CollectionItem;
