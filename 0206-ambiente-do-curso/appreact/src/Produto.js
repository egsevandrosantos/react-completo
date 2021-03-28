import React from 'react';

const Produto = ({ produto }) => {
  return (
    <>
      <h1>{produto.nome}</h1>
      <p>R$ {(+produto.preco).toFixed(2)}</p>
    </>
  );
};

export default Produto;
