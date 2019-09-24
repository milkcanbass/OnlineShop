import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import MyButton from '../myButton/myButton.component';
import CartItem from '../cartItem/cartItem.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cartDropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cartDropdownContainer">
    <div className="cartItems">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <MyButton>CHECKOUT</MyButton>
  </div>
);

CartDropdown.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
