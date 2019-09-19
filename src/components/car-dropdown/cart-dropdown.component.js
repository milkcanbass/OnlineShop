import React from 'react';
import MyButton from '../myButton/myButton.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className="cartDropdownContainer">
    <div className="cartItems" />
    <MyButton className="button">CHECKOUT</MyButton>
  </div>
);

export default CartDropdown;
