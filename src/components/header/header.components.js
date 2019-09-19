import React from 'react';
import './header.styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../car-dropdown/cart-dropdown.component';

import { auth } from '../../firebase/firebase.utils';

import { modalToggleWindow } from '../../redux/modal/modal.action';

const Header = props => {
  const { modalToggleWindow, user, dropdownOpen } = props;

  const modalHandler = e => {
    modalToggleWindow(e.target.id);
  };

  return (
    <div className="header">
      <div className="optionContainer">
        <a id="contact" onClick={e => modalHandler(e)} className="option">
          CONTACT
        </a>

        {user ? (
          <a className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </a>
        ) : (
          <a id="signInAndSignUp" onClick={e => modalHandler(e)} className="option">
            SIGN IN
          </a>
        )}

        <CartIcon className="option" />
      </div>
      {dropdownOpen ? <CartDropdown /> : null}
    </div>
  );
};

Header.propTypes = {
  modalToggleWindow: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  modalOpen: state.modal.modalOpen,
  dropdownOpen: state.cart.dropdownOpen,
});

const mapDispatchToProps = dispatch => ({
  modalToggleWindow: payload => dispatch(modalToggleWindow(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
