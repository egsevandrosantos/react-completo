import React from 'react';

const Checkbox = ({ options, values, setValues }) => {
  const handleChange = ({ target }) => {
    if (target.checked) {
      setValues([...values, target.value]);
    } else {
      setValues(values.filter((value) => value !== target.value));
    }
  };
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            onChange={handleChange}
            checked={values.includes(option)}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
