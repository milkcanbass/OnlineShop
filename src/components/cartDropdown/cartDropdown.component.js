import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import MyButton from '../myButton/myButton.component';
import CartItem from '../cartItem/cartItem.component';
import { toggleDropdown } from '../../redux/cart/cart.action';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cartDropdown.styles.scss';

const CartDropdown = ({ cartItems, history, toggleDropdown }) => (
  <div className="cartDropdownContainer">
    <div className="cartItems">
      {cartItems.length ? (
        cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
      ) : (
        <span className="emptyMessage">No items</span>
      )}
    </div>
    <MyButton
      onClick={() => {
        history.push('/checkout');
        toggleDropdown();
      }}
    >
      CHECk OUT
    </MyButton>
  </div>
);

CartDropdown.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
    .isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  history: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ).isRequired,
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CartDropdown),
);
