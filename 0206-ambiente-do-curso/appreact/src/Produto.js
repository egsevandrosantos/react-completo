import React from 'react';
import Fotos from './Fotos';

const Produto = ({ produto }) => {
  return (
    <>
      <p>Nome: {produto.nome}</p>
      <p>Preço: R$ {(+produto.preco).toFixed(2)}</p>
      <Fotos nome={produto.nome} fotos={produto.fotos} />
      <hr />
    </>
  );
};

export default Produto;
