import React from 'react';

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  const handleOnChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        name="nome"
        type="text"
        value={form.nome}
        onChange={handleOnChange}
      />
      <p>{form.nome}</p>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleOnChange}
      />
      <p>{form.email}</p>
      <button type="submit">Enviar</button>
    </form>
  );

  // const [nome, setNome] = React.useState('');
  // const [email, setEmail] = React.useState('');

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label htmlFor="nome">Nome</label>
  //     <input
  //       id="nome"
  //       name="nome"
  //       type="text"
  //       value={nome}
  //       onChange={({ target }) => setNome(target.value)}
  //     />
  //     <p>{nome}</p>
  //     <label htmlFor="email">Email</label>
  //     <input
  //       type="email"
  //       id="email"
  //       name="email"
  //       value={email}
  //       onChange={({ target }) => setEmail(target.value)}
  //     />
  //     <p>{email}</p>
  //     <button type="submit">Enviar</button>
  //   </form>
  // );
};

export default App;
