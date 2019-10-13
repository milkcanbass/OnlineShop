import React from 'react';
import './myButton.styles.scss';
import { PropTypes } from 'prop-types';

const MyButton = ({
  children, googleButton, inverted, donation, ...otherprops
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${googleButton ? 'googleButton' : ''} ${
      donation ? 'donationButton' : ''
    } myButton`}
    {...otherprops}
  >
    {children}
  </button>
);

MyButton.defaultProps = {
  children: '',
  donation: false,
  inverted: false,
  googleButton: false,
  otherprops: {},
};

MyButton.propTypes = {
  children: PropTypes.string,
  donation: PropTypes.bool,
  inverted: PropTypes.bool,
  googleButton: PropTypes.bool,
  otherprops: PropTypes.object,
};

export default MyButton;
