import React from 'react';

const Input = ({
  id,
  label,
  onChange,
  onBlur,
  value,
  type,
  placeholder,
  error,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type || 'text'}
        id={id}
        name={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
