import React from 'react';
import './myButton.styles.scss';
import { PropTypes } from 'prop-types';
import { putResolve } from '@redux-saga/core/effects';

const MyButton = ({ children, googleButton, ...otherProps }) => {
  console.log(children);
  return (
    <button className={`${googleButton ? 'googleButton' : ''} myButton`} {...otherProps}>
      {children}
    </button>
  );
};

MyButton.protoTypes = {
  children: PropTypes.string.isRequired,
  googleButton: PropTypes.bool.isRequired,
  otherProps: PropTypes.object,
};

export default MyButton;
