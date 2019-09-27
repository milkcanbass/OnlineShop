import React from 'react';
import './myShop.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMyShopDataObj } from '../../../redux/myShop/myShop.selectors';
import MyShopOverview from '../../myShopOverview/myShopOverview.component';

const myShopPage = ({ myShopData }) => {
  return (
    <div className="myShopPageContainer">
      {myShopData.map(({ id, ...otherProps }) => (
        <MyShopOverview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  myShopData: selectMyShopDataObj,
});

export default connect(mapStateToProps)(myShopPage);
