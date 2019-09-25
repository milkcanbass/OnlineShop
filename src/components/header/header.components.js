import React from 'react';
import './header.styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cartIcon/cartIcon.component';
import CartDropdown from '../cartDropdown/cartDropdown.component';
import { auth } from '../../firebase/firebase.utils';
import { modalToggleWindow } from '../../redux/modal/modal.action';

import { selectDropdownOpen } from '../../redux/cart/cart.selectors';
import { selectUser } from '../../redux/user/user.selectors';
import { selectModalOpen } from '../../redux/modal/modal.selectors';
import { toggleDropdown } from '../../redux/cart/cart.action';

const Header = props => {
  const { modalToggleWindow, user, dropdownOpen, toggleDropdown } = props;

  const modalHandler = e => {
    modalToggleWindow(e.target.id);
  };

  const cartDropdownClose = () => {
    if (dropdownOpen) {
      toggleDropdown();
    }
  };

  return (
    <div className="header">
      <div className="optionContainer">
        <a
          id="contact"
          onClick={e => {
            modalHandler(e);
            cartDropdownClose();
          }}
          className="option"
        >
          CONTACT
        </a>

        {user ? (
          <a
            className="option"
            onClick={() => {
              auth.signOut();
              cartDropdownClose();
            }}
          >
            SIGN OUT
          </a>
        ) : (
          <a
            id="signInAndSignUp"
            onClick={e => {
              modalHandler(e);
              cartDropdownClose();
            }}
            className="option"
          >
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

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  modalOpen: selectModalOpen,
  dropdownOpen: selectDropdownOpen,
});

const mapDispatchToProps = dispatch => ({
  modalToggleWindow: payload => dispatch(modalToggleWindow(payload)),
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
