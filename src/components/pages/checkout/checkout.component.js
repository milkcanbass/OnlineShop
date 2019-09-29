import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../../redux/cart/cart.selectors';
import CheckoutItem from '../../checkoutItem/checkoutItem.component';
import StripeCheckoutButton from '../../stripeButton/stripeButton.componet';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => {
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
        <div className="test-warning">
          *Using Test Mode. Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 -exp:01/20 - cvv:123
        </div>
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
