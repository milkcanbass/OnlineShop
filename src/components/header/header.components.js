import React from 'react';
import './header.styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { NavLink } from 'react-router-dom';
import CartIcon from '../cartIcon/cartIcon.component';
import CartDropdown from '../cartDropdown/cartDropdown.component';
import { auth } from '../../firebase/firebase.utils';
import { modalToggleWindow } from '../../redux/modal/modal.action';

import { selectDropdownOpen } from '../../redux/cart/cart.selectors';
import { selectUser } from '../../redux/user/user.selectors';
import { toggleDropdown } from '../../redux/cart/cart.action';

const Header = ({
  modalToggleWindow, user, dropdownOpen, toggleDropdown,
}) => {
  const modalHandler = (e) => {
    modalToggleWindow(e.target.id);
  };

  const cartDropdownClose = () => {
    if (dropdownOpen) {
      toggleDropdown();
    }
  };

  return (
    <div className="header">
      <NavLink to="/" className="pageTitle">
        SINCAT&HANDOG
      </NavLink>

      <div className="optionContainer">
        <a
          role="button"
          id="contact"
          onClick={(e) => {
            modalHandler(e);
            cartDropdownClose();
          }}
          className="option"
        >
          CONTACT
        </a>

        {user ? (
          <a
            role="button"
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
            role="button"
            id="signInAndSignUp"
            onClick={(e) => {
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

Header.defaultProps = {
  user: null,
};

Header.propTypes = {
  modalToggleWindow: PropTypes.func.isRequired,
  user: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  dropdownOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  dropdownOpen: selectDropdownOpen,
});

const mapDispatchToProps = (dispatch) => ({
  modalToggleWindow: (payload) => dispatch(modalToggleWindow(payload)),
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
