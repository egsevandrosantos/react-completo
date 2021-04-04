import React from 'react';
import Input from './Form/Input';

const App = () => {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  const validateCep = (value) => {
    if (!value || !value.toString().trim()) {
      setError('Preencha um valor');
      return false;
    }

    if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP válido');
      return false;
    }

    setError(null);
    return true;
  };

  const handleBlur = ({ target }) => {
    validateCep(target.value);
  };

  const handleChange = ({ target }) => {
    error && validateCep(target.value);
    setCep(target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (validateCep(cep)) {
      console.log('enviou');
    } else {
      console.log('não enviar');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        placeholder="00000-000"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
