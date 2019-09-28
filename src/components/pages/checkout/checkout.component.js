import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../../redux/cart/cart.selectors';
import CheckoutItem from '../../checkoutItem/checkoutItem.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => {
  console.log(cartItems);
  return (
    <div className="checkoutPageContainer">
      <div className="checkoutHeader">
        <div className="headerBlock">
          <span>Product</span>
        </div>
        <div className="headerBlock">
          <span>Description</span>
        </div>
        <div className="headerBlock">
          <span>Quantity</span>
        </div>
        <div className="headerBlock">
          <span>Price</span>
        </div>
        <div className="headerBlock">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
