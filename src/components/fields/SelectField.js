import React from 'react';

const renderSelectField = ({ input, label, meta: { touched, error }, children }) => (
  <div className="select">
    <label>{label}</label>
    <div className="select-wrapper">
      <select {...input}>
        {children}
      </select>
      {touched && error && <p className="error-msg">{error}</p>}
    </div>
  </div>
)

export default renderSelectField;