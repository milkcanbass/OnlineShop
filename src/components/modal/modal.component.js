import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import SignInAndSignUp from '../pages/signInAndSignUp/signInAndSignUp.component';
import ModalFormat from './modalFormat.component';
import Contact from '../pages/contact/contact.component';
import Error from '../error/error.component';

import { selectModalOpen, selectModalType } from '../../redux/modal/modal.selectors';

const Modal = (props) => {
  const { modalType } = props;

  // modalType comes from e.target.id.
  const modalContent = {
    contact: <Contact />,
    signInAndSignUp: <SignInAndSignUp />,
    error: <Error />,
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

const mapStateToProps = createStructuredSelector({
  modalOpen: selectModalOpen,
  modalType: selectModalType,
});

export default connect(
  mapStateToProps,
  null,
)(Modal);
