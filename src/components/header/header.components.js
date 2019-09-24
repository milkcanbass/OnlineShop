import React from 'react';
import './header.styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructureSelector } from 'reselect';
import CartIcon from '../cartIcon/cartIcon.component';
import CartDropdown from '../cartDropdown/cartDropdown.component';
import { auth } from '../../firebase/firebase.utils';
import { modalToggleWindow } from '../../redux/modal/modal.action';

import { selectDropdownOpen } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectModalOpen } from '../../redux/modal/modal.selectors';

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
  user: selectCurrentUser(state),
  modalOpen: selectModalOpen(state),
  dropdownOpen: selectDropdownOpen(state),
});

const mapDispatchToProps = dispatch => ({
  modalToggleWindow: payload => dispatch(modalToggleWindow(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
