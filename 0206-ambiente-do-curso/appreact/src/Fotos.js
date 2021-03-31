import React from 'react';
import Foto from './Foto';

const Fotos = ({ nome, fotos }) => {
  return (
    <>
      {fotos &&
        fotos.map((foto) => <Foto key={`${nome}${foto.titulo}`} foto={foto} />)}
    </>
  );
};

export default Fotos;
