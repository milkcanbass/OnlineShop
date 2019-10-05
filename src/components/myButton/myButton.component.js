import React from 'react';
import './myButton.styles.scss';
import { PropTypes } from 'prop-types';

const MyButton = ({
  children, googleButton, inverted, donation, ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${googleButton ? 'googleButton' : ''} ${
      donation ? 'donationButton' : ''
    } myButton`}
    {...otherProps}
  >
    {children}
  </button>
);

MyButton.defaultProps = {
  children: '',
  donation: false,
  inverted: false,
  googleButton: false,
  otherProps: {},
};

MyButton.propTypes = {
  children: PropTypes.string,
  donation: PropTypes.bool,
  inverted: PropTypes.bool,
  googleButton: PropTypes.bool,
  otherProps: PropTypes.object,
};

export default MyButton;
