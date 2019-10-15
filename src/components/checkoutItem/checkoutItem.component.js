import React from 'react';
import './checkoutItem.styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import {
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
} from '../../firebase/firebase.utils';
import { selectCartId } from '../../redux/cart/cart.selectors';

const CheckoutItem = ({ cartItem, cartId }) => {
  // console.log(props.cartItem);

  const {
    name, imageUrl, price, quantity,
  } = cartItem;
  return (
    <div className="checkoutItemContainer">
      <div className="imageContainer">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div role="button" className="arrow" onClick={() => reduceItemFromCart(cartId, cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div role="button" className="arrow" onClick={() => addItemToCart(cartId, cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span
        role="button"
        className="removeButton"
        onClick={() => removeItemFromCart(cartId, cartItem)}
      >
        &#10005;
      </span>
    </div>
  );
};

CheckoutItem.protoTypes = {
  cartItem: PropTypes.oneOfType(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
};

const mapStateToProps = createStructuredSelector({
  cartId: selectCartId,
});

export default connect(mapStateToProps)(CheckoutItem);
