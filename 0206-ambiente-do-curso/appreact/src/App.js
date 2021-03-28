import React from 'react';
import Produto from './Produto';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const urls = {
  notebook: 'https://ranekapi.origamid.dev/json/api/produto/notebook',
  smartphone: 'https://ranekapi.origamid.dev/json/api/produto/smartphone',
};

const App = () => {
  const [produto, setProduto] = React.useState(null);
  const capitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;

  React.useEffect(() => {
    produto && localStorage.setItem('produto', produto.id);
  }, [produto]);

  React.useEffect(() => {
    const produtoKey = localStorage.getItem('produto');
    produtoKey && loadProduct(urls[produtoKey]);
  }, []);

  const loadProduct = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setProduto(json);
      });
  };

  return (
    <>
      <h1>Preferência: {produto && produto.nome}</h1>
      {Object.keys(urls).map((key) => (
        <button
          style={{ marginRight: '1rem' }}
          key={key}
          onClick={() => loadProduct(urls[key])}
        >
          {capitalize(key)}
        </button>
      ))}
      {produto && <Produto produto={produto} />}
    </>
  );
};

export default App;
