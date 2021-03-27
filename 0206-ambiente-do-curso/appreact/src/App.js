import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  const [ativo, setAtivo] = React.useState(true);
  const [dados, setDados] = React.useState({ nome: 'André', idade: '30' });
  const [modal, setModal] = React.useState(false);

  const handleClick = () => {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui faculdade' });
  };

  return (
    <>
      <p>{modal ? 'True' : 'False'}</p>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </>
  );
};

export default App;
