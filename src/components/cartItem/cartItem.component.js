import React from 'react';
import './cartItem.styles.scss';
import PropTypes from 'prop-types';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cartItem">
    <img src={imageUrl} alt="item" alt="itemImage" />
    <div className="itemDetails">
      <span className="name">{name}</span>
      <span className="price">
        ${price}x{quantity}
      </span>
    </div>
  </div>
);

CartItem.propTypes = {
  item: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string, PropTypes.number)).isRequired,
};

export default CartItem;
