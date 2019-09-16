import React from 'react';
import './myButton.styles.scss';

const MyButton = ({ children, ...otherProps }) => (
  <button className="myButton" {...otherProps}>
    {children}
  </button>
);

export default MyButton;
