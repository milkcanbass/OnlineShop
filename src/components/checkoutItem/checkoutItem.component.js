import React from 'react';
import './checkoutItem.styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action';

const CheckoutItem = ({
  cartItem: { name, imageUrl, price, quantity },
  clearItemFromCart,
  addItem,
  removeItem,
}) => (
  <div className="checkoutItemContainer">
    <div className="imageContainer">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div role="button" className="arrow" onClick={() => removeItem(cartItem)}>
        &#10094;
      </div>
      <span className="value">{quantity}</span>
      <div role="button" className="arrow" onClick={() => addItem(cartItem)}>
        &#10095;
      </div>
    </span>
    <span className="price">{price}</span>
    <span role="button" className="removeButton" onClick={() => clearItemFromCart(cartItem)}>
      &#10005;
    </span>
  </div>
);

CheckoutItem.protoTypes = {
  cartItem: PropTypes.oneOfType(PropTypes.oneOfType(PropTypes.string, PropTypes.number)).isRequired,
  clearItemFromCart: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(CheckoutItem);
