import React from 'react';
import Produto from './Produto';
import { GlobalContext } from './GlobalContext';

const Produtos = () => {
  const globalContext = React.useContext(GlobalContext);

  return (
    <>
      {globalContext.produtos &&
        globalContext.produtos.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
    </>
  );
};

export default Produtos;
