import React from 'react';
// import UserContext from './UserContext';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  return (
    <>
      <div>Produto: {global.nome}</div>
      <p>Contar: {global.contar}</p>
      <button onClick={() => global.setContar((contar) => contar + 1)}>
        Contar
      </button>
      <button onClick={global.adicionarDois}>Contar 2</button>
    </>
  );
  // const dados = React.useContext(UserContext);
  // console.log(dados);

  // return <div>{dados.nome}</div>;
};

export default Produto;
