import React from 'react';
import './itemDetail.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMyShopDataObj, selectMyShopData } from '../../../redux/myShop/myShop.selectors';

const ItemDetailPage = ({ match, myShopData }) => {
  console.log(match.params);
  console.log(match.params.title);
  console.log(match.params.id);
  console.log(myShopData[match.params.title].items[match.params.id]);

  return <div>Item detail</div>;
};

const mapStateToProps = createStructuredSelector({
  myShopData: selectMyShopData,
});

export default connect(mapStateToProps)(ItemDetailPage);
