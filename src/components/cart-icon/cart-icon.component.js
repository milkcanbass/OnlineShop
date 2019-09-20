import React from 'react';
import { connect } from 'react-redux';
import { toggleDropdown } from '../../redux/cart/cart.action';

import Icon from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = props => {
  const { toggleDropdown } = props;
  return (
    <div className="cart-icon" onClick={() => toggleDropdown()}>
      <img src={Icon} className="icon" />
      <span className="item-count">1</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(
  null,
  mapDispatchToProps,
)(CartIcon);
