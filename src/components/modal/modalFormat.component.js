import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './modalFormat.styles.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectModalOpen } from '../../redux/modal/modal.selectors';

import { modalCloseWindow } from '../../redux/modal/modal.action';

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

  onCloseModalByClickingOutside = e => {
    const { modalCloseWindow } = this.props;
    if (e.target.className === 'modalBackground') {
      modalCloseWindow();
    }
  };

  render() {
    const { children, modalOpen } = this.props;

    const modalUI = (
      <>
        <div className="modalBackground" onClick={e => this.onCloseModalByClickingOutside(e)}>
          <div className="modal">{children}</div>
        </div>
      </>
    );
    if (!modalOpen) {
      return null;
    }
    return ReactDOM.createPortal(modalUI, this.el);
  }
}

ModalFormat.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  modalCloseWindow: PropTypes.func.isRequired,
};

const ToProps = createStructuredSelector({
  modalOpen: selectModalOpen,
});

const mapDispatchToProps = dispatch => ({
  modalCloseWindow: () => dispatch(modalCloseWindow()),
});

export default connect(
  ToProps,
  mapDispatchToProps,
)(ModalFormat);
