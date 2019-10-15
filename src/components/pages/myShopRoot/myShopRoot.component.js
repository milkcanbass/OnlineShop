import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import MyShopPage from '../myShop/myShop.component';
import ItemDetailPage from '../itemDetail/itemDetail.component';
import { selectMyShopData } from '../../../redux/myShop/myShop.selectors';

const MyShopRoot = ({ match, myShopData }) => (
  <div className="myShopRoot">
    <Route
      exact
      path={`${match.path}`}
      render={(props) => <MyShopPage {...props} myShopData={myShopData} />}
    />
    <Route
      path={`${match.path}/:title/:id`}
      render={(props) => <ItemDetailPage {...props} myShopData={myShopData} />}
    />
  </div>
);

MyShopRoot.propTypes = {
  myShopData: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
    .isRequired,
};

const mapStateToProps = createStructuredSelector({
  myShopData: selectMyShopData,
});

export default connect(mapStateToProps)(MyShopRoot);
