import React from 'react';

const Produto = ({ produto }) => {
  const formatarPreco = (preco) => `R$ ${(+preco).toFixed(2)}`;

  return (
    <>
      <h1>{produto.nome}</h1>
      <p>{formatarPreco(produto.preco)}</p>
      {produto.fotos.map((foto) => (
        <img
          key={`${produto.id}${foto.titulo}`}
          src={foto.src}
          alt={produto.nome}
        />
      ))}
    </>
  );
};

export default Produto;
