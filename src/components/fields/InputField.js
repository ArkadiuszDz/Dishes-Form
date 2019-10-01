import React from 'react';

const renderField = ({ input, pattern, label, type, meta: { touched, error, active, dirty } }) => (
  <div>
    <label className={!active && !dirty? "placeholder":"filled"}>{label}</label>
    <div>
      <input {...input} autoComplete="off" type={type} pattern={pattern}/>
      {touched && error && <p className="error-msg">{error}</p>}
    </div>
  </div>
)

export default renderField;