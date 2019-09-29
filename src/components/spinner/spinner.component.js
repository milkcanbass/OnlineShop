import React from 'react';
import PropTypes from 'prop-types';
import './spinner.styles.scss';

export default function Spinner({ style }) {
  const circles = [...Array(3)].map((_, index) => (
    <div key={index} style={{ background: 'grey' }} />
  ));

  return (
    <div className="spinnerContainer">
      <div style={{ background: 'grey' }}></div>
      <div style={{ background: 'grey' }}></div>
      <div style={{ background: 'grey' }}></div>
    </div>
  );
}

Spinner.propTypes = {
  /** style object */
  style: PropTypes.object,
};
