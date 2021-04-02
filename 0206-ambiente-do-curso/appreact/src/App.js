import React from 'react';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');

  const downcase = (text) =>
    text ? `${text[0].toLowerCase()}${text.slice(1)}` : '';

  const handleClick = ({ target }) => setProduto(downcase(target.innerText));

  return (
    <>
      <p>{produto}</p>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
    </>
  );
};

export default App;
