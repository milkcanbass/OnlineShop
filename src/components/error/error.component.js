import React from 'react';
import './error.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { selectMessage } from '../../redux/modal/modal.selectors';

const Error = ({ message }) => (
  <div className="errorContainer">
    <h2 className="errorTitle">Sorry...</h2>
    <p>{message}</p>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  message: selectMessage,
});

export default connect(mapStateToProps)(Error);
