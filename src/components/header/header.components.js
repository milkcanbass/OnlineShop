import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CartIcon from '../cart-icon/cart-icon.component';

import { modalToggleWindow } from '../../redux/modal/modal.action';

const Header = props => {
  const { modalToggleWindow } = props;

  return (
    <div className="header">
      <div className="titleContainer">
        <h1 className="brandName">Jiafeimao&Handagou</h1>
      </div>
      <div className="optionContainer">
        <button type="button" onClick={() => modalToggleWindow()}>
          propsme
        </button>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        <Link to="/laginAndSignin" className="option">
          LOGIN&SIGNIN
        </Link>
        <CartIcon className="option" />
      </div>
    </div>
  );
};

Header.propTypes = {
  modalToggleWindow: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  modalOpen: state.modal.modalOpen,
});

const mapDispatchToProps = dispatch => ({
  modalToggleWindow: () => dispatch(modalToggleWindow()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
