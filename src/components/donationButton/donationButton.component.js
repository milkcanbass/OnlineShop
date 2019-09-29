import React from 'react';
import './donationButton.styles.scss';

import { PropTypes } from 'prop-types';

const DonationButton = ({ children, ...otherProps }) => {
  return (
    <button className="btn draw-border" {...otherProps}>
      ${children}
    </button>
  );
};

DonationButton.propTypes = {
  children: PropTypes.string,
};

export default DonationButton;
