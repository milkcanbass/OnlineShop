import React from 'react';
import './error.styles.scss';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectMessage } from '../../redux/modal/modal.selectors';

const Error = props => {
  const { message } = props;

  return (
    <div className="errorContainer">
      <h2 className="errorTitle">Sorry...</h2>
      <p>{message}</p>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  message: selectMessage,
});

export default connect(mapStateToProps)(Error);
