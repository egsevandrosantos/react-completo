import React from 'react';
import Form from './form/Form';

const Titulo = ({ cor, texto, children }) => {
  return (
    <>
      <h1 style={{ color: cor }}>{texto}</h1>
      {children}
    </>
  );
};

const App = () => {
  return (
    <>
      <Titulo cor="red" texto="Meu titulo 1">
        <p>Eu sou um children P</p>
      </Titulo>
      <Titulo cor="blue" texto="Meu titulo 2">
        Eu sou um children texto puro
      </Titulo>
      <Titulo texto="Meu titulo 3" />
      <Form />
    </>
  );
};

export default App;
