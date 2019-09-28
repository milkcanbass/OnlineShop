import React from 'react';
import PropTypes from 'prop-types';
import './spinner.styles.scss';

export default function Spinner({ color, className, style }) {
  const circles = [...Array(3)].map((_, index) => (
    <div key={index} style={{ background: `${color}` }} />
  ));

  return (
    <div className={`lds-facebook ${className}`} style={{ ...style }}>
      {circles}
    </div>
  );
}

Spinner.propTypes = {
  /** hex color */
  color: PropTypes.string,
  /** class name  */
  className: PropTypes.string,
  /** style object */
  style: PropTypes.object,
};

Spinner.defaultProps = {
  color: 'grey',
  className: '',
  style: {},
};
