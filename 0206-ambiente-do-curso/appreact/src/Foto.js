import React from 'react';

const Foto = ({ foto }) => {
  return <img src={foto.src} alt={foto.titulo} />;
};

export default Foto;
