import React, { Component } from 'react';
import SHOP_DATA from './shop.data';

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    return <h1>ShopPage</h1>;
  }
}
export default ShopPage;
