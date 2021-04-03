import React from 'react';

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

const formFields = [
  { id: 'nome', label: 'Nome', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
  { id: 'senha', label: 'Senha', type: 'password' },
  { id: 'cep', label: 'Cep', type: 'number' },
  { id: 'rua', label: 'Rua', type: 'text' },
  { id: 'numero', label: 'Número', type: 'number' },
  { id: 'bairro', label: 'Bairro', type: 'text' },
  { id: 'cidade', label: 'Cidade', type: 'text' },
  { id: 'estado', label: 'Estado', type: 'text' },
];

const App = () => {
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {})
  );
  // const [form, setForm] = React.useState({
  //   nome: '',
  //   email: '',
  //   senha: '',
  //   cep: '',
  //   rua: '',
  //   numero: '',
  //   bairro: '',
  //   cidade: '',
  //   estado: '',
  // });
  const [request, setRequest] = React.useState({
    response: null,
    json: null,
    error: null,
    status: null,
  });

  const sendPost = async () => {
    let response, json, error, status;
    try {
      response = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw await response.json();
      }
      json = await response.json();
    } catch (err) {
      error = err.message;
    } finally {
      status = response.status;
      setRequest({ response, json, error, status });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendPost();
  };

  const handleOnChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  // const capitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;

  // const extractType = (key) => {
  //   const emailsType = ['email'];
  //   const passwordsType = ['senha'];
  //   const numbersType = ['cep', 'numero'];
  //   if (emailsType.includes(key)) return 'email';
  //   if (passwordsType.includes(key)) return 'password';
  //   if (numbersType.includes(key)) return 'number';
  //   return 'text';
  // };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <React.Fragment key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            name={id}
            id={id}
            value={form[id]}
            onChange={handleOnChange}
            required={true}
          />
        </React.Fragment>
      ))}
      {/* {Object.keys(form).map((key) => (
        <React.Fragment key={key}>
          <label htmlFor={key}>{capitalize(key)}</label>
          <input
            type={extractType(key)}
            name={key}
            id={key}
            value={form[key]}
            onChange={handleOnChange}
            required={true}
          />
        </React.Fragment>
      ))} */}
      {request.status && (
        <p>
          {request.status} -&nbsp;
          {request.json ? 'Usuário criado com sucesso' : request.error}
        </p>
      )}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default App;
