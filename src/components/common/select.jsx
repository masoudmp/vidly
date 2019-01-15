import React from "react";

const Select = ({ name, label, error, defaultValue, items, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        value={defaultValue}
        name={name}
        id={name}
        {...rest}
        className="custom-select"
      >
        <option key="emptyString" value="" />
        {items.map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
