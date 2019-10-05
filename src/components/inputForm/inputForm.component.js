import React from 'react';
import './inputForm.styles.scss';
import PropTypes from 'prop-types';

const InputForm = ({ handleChange, label, ...otherProps }) => (
  <div className="inputFormContainer">
    <input className="input-form" onChange={handleChange} {...otherProps} />
    {label ? (
      <label className={`${otherProps.value.length ? 'shrink' : ''} input-form-label `}>
        {label}
      </label>
    ) : null}
  </div>
);

InputForm.propTypes = {
  handleChange: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  otherProps: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

export default InputForm;
