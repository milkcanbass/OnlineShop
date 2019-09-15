import React from 'react';
import Icon from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => (
  <div className="cart-icon">
    <Icon className="icon" />
    <span className="item-count">1</span>
  </div>
);

export default CartIcon;
