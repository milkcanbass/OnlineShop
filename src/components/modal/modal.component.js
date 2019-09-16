import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignInAndSignUp from '../signInAndSignUp/signInAndSignUp.component';
import ModalFormat from './modalFormat.component';
import { modalToggleWindow } from '../../redux/modal/modal.action';

const ModalContentSelecter = () => {
  return (
    <ModalFormat>
      <SignInAndSignUp />
    </ModalFormat>
  );
};

ModalContentSelecter.propTypes = {
  onClose: PropTypes.func.isRequired,
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
)(ModalContentSelecter);
