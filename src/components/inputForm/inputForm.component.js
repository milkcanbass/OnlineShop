import React from 'react';
import './inputForm.styles.scss';
import PropTypes from 'prop-types';

const InputForm = ({ handleChange, label, ...otherprops }) => (
  <div className="inputFormContainer">
    <input className="input-form" onChange={handleChange} {...otherprops} />
    {label ? (
      <label className={`${otherprops.value.length ? 'shrink' : ''} input-form-label `}>
        {label}
      </label>
    ) : null}
  </div>
);

InputForm.defaultProps = {
  otherprops: [],
};

InputForm.propTypes = {
  handleChange: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  otherprops: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

export default InputForm;
