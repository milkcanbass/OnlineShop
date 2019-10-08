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
import { closeDropdown } from '../../redux/cart/cart.action';

const Header = ({
  modalToggleWindow, user, dropdownOpen, closeDropdown,
}) => {
  const signOut = () => {
    if (dropdownOpen) {
      closeDropdown();
    }
    auth.signOut();
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
          onClick={(e) => modalToggleWindow(e.target.id)}
          className="option"
        >
          CONTACT
        </a>
        {user ? (
          <>
            <a role="button" className="option" onClick={() => signOut()}>
              SIGN OUT
            </a>

            <CartIcon className="option" />
          </>
        ) : (
          <a
            role="button"
            id="signInAndSignUp"
            onClick={(e) => {
              modalToggleWindow(e.target.id);
            }}
            className="option"
          >
            SIGN IN
          </a>
        )}
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
  closeDropdown: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  dropdownOpen: selectDropdownOpen,
});

const mapDispatchToProps = (dispatch) => ({
  modalToggleWindow: (payload) => dispatch(modalToggleWindow(payload)),
  closeDropdown: () => dispatch(closeDropdown()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
