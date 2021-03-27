import React from 'react';

function Input({ label, id, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </>
  );
}

export default Input;
