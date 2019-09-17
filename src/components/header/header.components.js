import React from 'react';
import './header.styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CartIcon from '../cart-icon/cart-icon.component';

import { auth } from '../../firebase/firebase.utils';

import { modalToggleWindow } from '../../redux/modal/modal.action';

const Header = props => {
  const { modalToggleWindow, user } = props;

  const modalHandler = e => {
    modalToggleWindow(e.target.id);
  };

  return (
    <div className="header">
      <div className="titleContainer">
        <h1 className="brandName">Jiafeimao&Handagou</h1>
      </div>
      <div className="optionContainer">
        <p id="contact" onClick={e => modalHandler(e)} className="option">
          CONTACT
        </p>

        {user ? (
          <p className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </p>
        ) : (
          <p id="signInAndSignUp" onClick={e => modalHandler(e)} className="option">
            SIGN IN
          </p>
        )}
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
  modalToggleWindow: payload => dispatch(modalToggleWindow(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
