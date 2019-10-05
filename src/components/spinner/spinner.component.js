import React from 'react';
import './spinner.styles.scss';

const Spinner = () => {
  const circles = [...Array(3)].map((_, index) => (
    <div key={index} style={{ background: 'grey' }} />
  ));

  return (
    <div className="spinnerContainer">
      <div style={{ background: 'grey' }} />
      <div style={{ background: 'grey' }} />
      <div style={{ background: 'grey' }} />
    </div>
  );
};

export default Spinner;
