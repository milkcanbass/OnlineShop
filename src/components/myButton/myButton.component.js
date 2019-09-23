import React from 'react';
import './myButton.styles.scss';
import PropTypes from 'prop-types';

const MyButton = ({ children, googleButton, ...otherProps }) => {
  console.log(children);
  return (
    <button className={`${googleButton ? 'googleButton' : ''} myButton`} {...otherProps}>
      {children}
    </button>
  );
};

export default MyButton;
