import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { selectCartItems, selectCartTotal, selectCartId } from '../../../redux/cart/cart.selectors';
import CheckoutItem from '../../checkoutItem/checkoutItem.component';
import StripeCheckoutButton from '../../stripeButton/stripeButton.componet';
import { selectUserId } from '../../../redux/user/user.selectors';
import MyButton from '../../myButton/myButton.component';
import { modalToggleWindow } from '../../../redux/modal/modal.action';

import './checkout.styles.scss';

const CheckoutPage = ({
  cartItems, total, user, modalToggleWindow, cartId,
}) => (
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
    {cartItems.length > 0 ? (
      cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
    ) : (
      <h1>No Item</h1>
    )}
    <div className="total">
      <span>
TOTAL: $
        {total}
      </span>
    </div>
    {user ? (
      total ? (
        <div>
          <div className="testWarning">
            <div className="warningText">
              *Using Test Mode. Please use the following test credit card for payments*
              <br />
              4242 4242 4242 4242 -exp:01/20 - cvv:123
            </div>
            <StripeCheckoutButton price={total} cartId={cartId} />
          </div>
        </div>
      ) : null
    ) : (
      <MyButton
        role="button"
        id="signInAndSignUp"
        onClick={(e) => {
          modalToggleWindow(e.target.id);
        }}
        googleButton
      >
        Sign In to checkout
      </MyButton>
    )}
  </div>
);

CheckoutPage.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
    .isRequired,
  total: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  modalToggleWindow: (id, message) => dispatch(modalToggleWindow(id, message)),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  user: selectUserId,
  cartId: selectCartId,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckoutPage);
