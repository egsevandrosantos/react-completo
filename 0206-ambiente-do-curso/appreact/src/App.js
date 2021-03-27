import React from 'react';
// import ButtonModal from './ButtonModal';
// import Modal from './Modal';

const App = () => {
  // const [ativo, setAtivo] = React.useState(true);
  // const [dados, setDados] = React.useState({ nome: 'André', idade: '30' });
  // const [modal, setModal] = React.useState(() => window.localStorage.getItem('ativo'));
  // const [modal, setModal] = React.useState(false);
  // const [items, setItems] = React.useState('Teste');

  // const handleClick = () => {
  //   setAtivo(!ativo);
  //   setDados({ ...dados, faculdade: 'Possui faculdade' });
  //   // items = 'Outro'; // Errado
  //   setItems('Outro'); // Correto
  // };

  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  const handleClick = () => {
    setContar((contar) => {
      // setItems((items) => [...items, 'Item ' + (contar + 1)]); // Isso cria efeito colateral (StrictMode)
      return contar + 1;
    });
    setItems([...items, 'Item ' + (contar + 1)]);
  };

  return (
    <>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>

      {/* <p>{items}</p>
      <button onClick={handleClick}>Clicar</button>
      <p>{modal ? 'True' : 'False'}</p>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button> */}
    </>
  );
};

export default App;
