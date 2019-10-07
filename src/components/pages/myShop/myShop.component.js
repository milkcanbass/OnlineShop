import React from 'react';
import { Redirect } from 'react-router-dom';
import './myShop.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { selectMyShopDataObj } from '../../../redux/myShop/myShop.selectors';
import MyShopOverview from '../../myShopOverview/myShopOverview.component';

const myShopPage = ({ myShopData }) => {
  console.log(myShopData);
  return (
    <div className="myShopPageContainer">
      {myShopData.length > 0 ? (
        myShopData.map(({ id, ...otherProps }) => <MyShopOverview key={id} {...otherProps} />)
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

myShopPage.propTypes = {
  myShopData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
};

const mapStateToProps = createStructuredSelector({
  myShopData: selectMyShopDataObj,
});

export default connect(mapStateToProps)(myShopPage);
