import React from 'react';
import './inputForm.styles.scss';

const InputForm = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="inputFormContainer">
      <input className="input-form" onChange={handleChange} {...otherProps} />

      {label ? (
        <label className={`${otherProps.value.length ? 'shrink' : ''} input-form-label `}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default InputForm;
