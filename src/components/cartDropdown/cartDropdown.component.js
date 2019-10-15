import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import MyButton from '../myButton/myButton.component';
import CartItem from '../cartItem/cartItem.component';
import { toggleDropdown } from '../../redux/cart/cart.action';
import { selectUserId } from '../../redux/user/user.selectors';
import { modalToggleWindow } from '../../redux/modal/modal.action';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cartDropdown.styles.scss';

const CartDropdown = ({
  cartItems, history, toggleDropdown, modalToggleWindow, userId,
}) => (
  <div className="cartDropdownContainer">
    {userId ? (
      <div>
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
    ) : (
      <div>
        <div className="cartItems">
          <span className="emptyMessage">Please sign in</span>
        </div>
        <MyButton
          role="button"
          id="signInAndSignUp"
          onClick={(e) => {
            modalToggleWindow(e.target.id);
          }}
          googleButton
        >
          Sign In to store item
        </MyButton>
      </div>
    )}
  </div>
);

CartDropdown.defaultProps = {
  userId: '',
};

CartDropdown.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
    .isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  history: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ).isRequired,
  modalToggleWindow: PropTypes.func.isRequired,
  userId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  userId: selectUserId,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
  modalToggleWindow: (item, message) => dispatch(modalToggleWindow(item, message)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CartDropdown),
);
