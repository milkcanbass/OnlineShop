import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../collectionPreview/collectionPreview.component';

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;

    return (
      <div className="shopPage">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
