import React from 'react';
import './itemDetail.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMyShopDataObj } from '../../../redux/myShop/myShop.selectors';

const ItemDetailPage = ({ match, myShopData }) => {
  console.log(match.params);

  return <div>Item detail</div>;
};

const mapStateToProps = createStructuredSelector({
  myShopData: selectMyShopDataObj,
});

export default connect(mapStateToProps)(ItemDetailPage);
