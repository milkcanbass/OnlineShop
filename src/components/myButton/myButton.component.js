import React from 'react';
import './myButton.styles.scss';

const MyButton = ({ children, googleButton, ...otherProps }) => (
  <button className={`${googleButton ? 'googleButton' : ''} myButton`} {...otherProps}>
    {children}
  </button>
);

export default MyButton;
