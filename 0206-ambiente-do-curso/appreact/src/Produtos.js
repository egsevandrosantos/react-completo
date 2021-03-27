import React from 'react';
import Titulo from './Titulo';

const Produtos = ({ produtos }) => {
  return (
    <>
      <Titulo titulo="Produtos" />
      {produtos.map((produto) => (
        <div
          key={produto.nome}
          style={{
            border: '1px solid black',
            padding: '10px',
            marginBottom: '15px',
          }}
        >
          <p>{produto.nome}</p>
          <ul>
            {produto.propriedades.map((propriedade) => (
              <li key={propriedade}>{propriedade}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Produtos;
