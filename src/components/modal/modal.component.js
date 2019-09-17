import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignInAndSignUp from '../../pages/signInAndSignUp/signInAndSignUp.component';
import ModalFormat from './modalFormat.component';
import Contact from '../../pages/contact/contact.component';

import { modalToggleWindow } from '../../redux/modal/modal.action';

const Modal = props => {
  const { modalType } = props;

  // modalType comes from e.target.id.
  const modalContent = {
    contact: <Contact />,
    signInAndSignUp: <SignInAndSignUp />,
    error: 'error',
  };

  return (
    <div>
      <ModalFormat>{modalContent[modalType]}</ModalFormat>
    </div>
  );
};

Modal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  modalType: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  modalOpen: state.modal.modalOpen,
  modalType: state.modal.modalType,
});

const mapDispatchToProps = dispatch => ({
  modalToggleWindow: () => dispatch(modalToggleWindow()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
