import React from 'react';

const titulo = <h1>Esse é um titulo</h1>;

const App = () => {
  const [ativo, setAtivo] = React.useState(true);
  const random = Math.random();

  const estiloP = {
    color: 'blue',
    fontSize: '10rem',
  };

  const mostrarNome = (returnUndefined) => {
    console.log('Executando mostrar nome');
    return returnUndefined ? undefined : 'Evandro';
  };

  const carro = {
    marca: 'Ford',
    rodas: 4,
  };

  return (
    <>
      {/* <p>{carro}</p> Não valido */}
      <p>{carro.marca}</p>
      {titulo}
      {/* <p>{mostrarNome}</p> Não valido */}
      <p>{mostrarNome(true)}</p> {/* Undefined não aparece na tela */}
      <p>{mostrarNome()}</p>
      {/* <p>{new Date()}</p> Não valido */}
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p>{true}</p>
      <p>{false}</p>
      <p>{true ? 'True não aparece' : 'False também não'}</p>
      <p>{false ? 'True não aparece' : 'False também não'}</p>
      <p>{10}</p>
      <p
        className={ativo ? 'ativo' : 'inativo'}
        onClick={() => setAtivo(!ativo)}
      >
        {random * 100}
      </p>
    </>
    // <React.Fragment>
    // Atalho <React.Fragment>
    // <>
    //   <label htmlFor="nome">Nome</label>
    //   <input type="text" id="nome" />
    // </>
    // Atalho </React.Fragment>
    // </React.Fragment>
  );
};

export default App;
