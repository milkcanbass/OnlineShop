import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { toggleDropdown } from '../../redux/cart/cart.action';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import Icon from '../../assets/shopping-bag.svg';
import './cartIcon.styles.scss';

class CartIcon extends Component {
  render() {
    const { toggleDropdown, itemCount } = this.props;
    return (
      <div role="button" className="cartIcon" onClick={() => toggleDropdown()}>
        <img src={Icon} className="icon" alt="cartIcon" />
        <span className="item-count">{itemCount.length}</span>
      </div>
    );
  }
}

CartIcon.defaultProps = {
  itemCount: 0,
};

CartIcon.propTypes = {
  toggleDropdown: PropTypes.func.isRequired,
  // itemCount: PropTypes.,
};

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});

const mapStateToProps = createStructuredSelector({ itemCount: selectCartItems });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartIcon);
