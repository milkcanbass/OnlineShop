import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './modalFormat.styles.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { modalToggleWindow } from '../../redux/modal/modal.action';

// For portal function. get element from index.html
const modalRoot = document.getElementById('modal-root');

class ModalFormat extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const { children, modalOpen, modalToggleWindow } = this.props;

    const modalUI = (
      <div className="modalBackground">
        <div className="modal">
          {children}
          <div className="footer">
            <button onClick={e => modalToggleWindow(e)}> close</button>
          </div>
        </div>
      </div>
    );
    if (!modalOpen) {
      return null;
    }
    return ReactDOM.createPortal(modalUI, this.el);
  }
}

ModalFormat.propTypes = {
  onClose: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  modalToggleWindow: () => dispatch(modalToggleWindow()),
});

const mapStateToProps = state => ({
  modalOpen: state.modal.modalOpen,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalFormat);