import React from 'react';
import './myButton.styles.scss';
import { PropTypes } from 'prop-types';

const MyButton = ({ children, googleButton, inverted, donation, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${googleButton ? 'googleButton' : ''} ${
        donation ? 'donationButton' : ''
      } myButton`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

MyButton.propTypes = {
  children: PropTypes.string.isRequired,
  googleButton: PropTypes.bool.isRequired,
  otherProps: PropTypes.object,
};

export default MyButton;
