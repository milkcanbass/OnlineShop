import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleDropdown } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import Icon from '../../assets/shopping-bag.svg';
import './cartIcon.styles.scss';

const CartIcon = props => {
  const { toggleDropdown, itemCount } = props;
  return (
    <div className="cartIcon" onClick={() => toggleDropdown()}>
      <img src={Icon} className="icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});

const mapStateToProps = createStructuredSelector({ itemCount: selectCartItemsCount });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartIcon);
