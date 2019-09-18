import React from 'react';
import './error.styles.scss';
import { connect } from 'react-redux';

const Error = props => {
  const { message } = props;

  return (
    <div className="errorContainer">
      <div className="errorTitle">Sorry...</div>
      <p>{message}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  message: state.modal.message,
});

export default connect(mapStateToProps)(Error);
