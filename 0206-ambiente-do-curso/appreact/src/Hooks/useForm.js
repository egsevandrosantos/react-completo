import React from 'react';

const types = {
  cep: { regex: /^\d{5}-?\d{3}$/, message: 'Cep inválido' },
  email: {
    regex: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: 'Email inválido',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  const validate = (value) => {
    if (type === false) {
      return true;
    }

    if (!value || !value.toString().trim()) {
      setError('Preencha um valor');
      return false;
    }

    if (types[type]) {
      if (!types[type].regex.test(value)) {
        setError(types[type].message);
        return false;
      }

      // Outras validações com types[type]
    }

    setError(null);
    return true;
  };

  const onChange = ({ target }) => {
    error && validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
