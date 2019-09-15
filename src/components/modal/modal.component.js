import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './modal.styles.scss';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  onClose = e => {
    e.stopPropagation();
    this.props.onClose && this.props.onClose(e);
  };

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const { show, children } = this.props;

    const modalUI = (
      <div className="modalBackground">
        <div className="modal">
          {children}
          <div className="footer">
            <button onClick={e => this.onClose(e)}> close</button>
          </div>
        </div>
      </div>
    );
    if (show) {
      return null;
    }
    return ReactDOM.createPortal(modalUI, this.el);
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
