import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { toggleDropdown } from '../../redux/cart/cart.action';
import { selectCartQuantityTotal } from '../../redux/cart/cart.selectors';

import Icon from '../../assets/shopping-bag.svg';
import './cartIcon.styles.scss';

const CartIcon = ({ toggleDropdown, itemCount }) => (
  <div role="button" className="cartIcon" onClick={() => toggleDropdown()}>
    <img src={Icon} className="icon" alt="cartIcon" />
    <span className="itemCount">{itemCount}</span>
  </div>
);

CartIcon.defaultProps = {
  itemCount: 0,
};

CartIcon.propTypes = {
  toggleDropdown: PropTypes.func.isRequired,
  itemCount: PropTypes.number,
};

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});

const mapStateToProps = createStructuredSelector({ itemCount: selectCartQuantityTotal });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartIcon);
