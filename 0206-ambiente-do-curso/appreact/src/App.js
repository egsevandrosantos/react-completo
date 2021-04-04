import React from 'react';
import Input from './Form/Input';
import useForm from './Hooks/useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);
  const fieldsToValidate = [cep, email, nome, sobrenome];

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const validations = fieldsToValidate.map((field) => field.validate());
    if (!validations.some((valid) => !valid)) {
      console.log('enviou');
    } else {
      console.log('não enviar');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" id="nome" placeholder="Fulano" {...nome} />
      <Input
        label="Sobrenome"
        id="sobrenome"
        placeholder="De Tal"
        {...sobrenome}
      />
      <Input label="CEP" id="cep" placeholder="00000-000" {...cep} />
      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="seu@email.com"
        {...email}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
