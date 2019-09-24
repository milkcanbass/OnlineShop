import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import MyButton from '../myButton/myButton.component';
import CartItem from '../cartItem/cartItem.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cartDropdown.styles.scss';

const CartDropdown = ({ cartItems, history }) => (
  <div className="cartDropdownContainer">
    <div className="cartItems">
      {cartItems.length ? (
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      ) : (
        <span className="emptyMessage">No items</span>
      )}
    </div>
    <MyButton onClick={() => history.push('/checkout')}>CHECKOUT</MyButton>
  </div>
);

CartDropdown.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
