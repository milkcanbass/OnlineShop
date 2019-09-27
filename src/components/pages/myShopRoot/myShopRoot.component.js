import React from 'react';
import { Route } from 'react-router-dom';
import MyShopPage from '../myShop/myShop.component';
import ItemDetailPage from '../itemDetail/itemDetail.component';

const MyShopRoot = ({ match }) => {
  return (
    <div className="myShopRoot">
      <Route exact path={`${match.path}`} component={MyShopPage} />
      <Route path={`${match.path}/:title/:id`} component={ItemDetailPage} />
    </div>
  );
};

export default MyShopRoot;
