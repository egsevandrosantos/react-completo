import React from 'react';

const ButtonModal = ({ setModal }) => {
  function handleClick() {
    // setModal((valorAnterior) => !valorAnterior); // Como callback temos acesso ao valor anterior sem nunca referenciar esse valor ou receber por props
    setModal((modal) => {
      if (modal) {
        return false;
      }

      return true;
    }); // Callback com função anonima
  }

  return <button onClick={handleClick}>Abrir</button>;
};

export default ButtonModal;
