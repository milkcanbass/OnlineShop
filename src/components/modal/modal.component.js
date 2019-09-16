import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignInAndSignUp from '../signInAndSignUp/signInAndSignUp.component';
import ModalFormat from './modalFormat.component';
import Contact from '../contact/contact.component';

import { modalToggleWindow } from '../../redux/modal/modal.action';

const ModalContentSelecter = props => {
  const { modalType } = props;

  return (
    <div>
      <ModalFormat>
        {/* //modalType comes from e.target.id. usign self invoking function(js) */}
        {(() => {
          switch (modalType) {
            case 'contact':
              return <Contact />;
            case 'signInAndSignUp':
              return <SignInAndSignUp />;
            case 'error':
              return <Error />;
            default:
              return null;
          }
        })()}
      </ModalFormat>
    </div>
  );
};

ModalContentSelecter.propTypes = {
  onClose: PropTypes.func.isRequired,
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
)(ModalContentSelecter);
