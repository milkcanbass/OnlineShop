import React from 'react';
import './checkoutItem.styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { clearItemFromCart, removeItem } from '../../redux/cart/cart.action';
import { addItemToCart } from '../../firebase/firebase.utils';
import { selectCartId } from '../../redux/cart/cart.selectors';

const CheckoutItem = (props) => {
  // console.log(props.cartItem);
  const {
    cartItem: {
      name, imageUrl, price, quantity,
    },
    cartId,
    clearItemFromCart,
    removeItem,
  } = props;
  return (
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
        <div role="button" className="arrow" onClick={() => addItemToCart(cartId, props.cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span role="button" className="removeButton" onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

CheckoutItem.protoTypes = {
  cartItem: PropTypes.oneOfType(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
  clearItemFromCart: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
const mapStateToProps = createStructuredSelector({
  cartId: selectCartId,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckoutItem);
