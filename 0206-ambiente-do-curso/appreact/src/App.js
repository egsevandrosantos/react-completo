import React from 'react';
import Produto from './Produto';

const urls = {
  tablet: 'https://ranekapi.origamid.dev/json/api/produto/tablet',
  smartphone: 'https://ranekapi.origamid.dev/json/api/produto/smartphone',
  notebook: 'https://ranekapi.origamid.dev/json/api/produto/notebook',
};

const btns = {
  marginRight: '1em',
};

const App = () => {
  const [loader, setLoader] = React.useState(false);
  const [produto, setProduto] = React.useState(null);

  const capitalize = (str) => `${str[0].toUpperCase()}${str.slice(1)}`;

  // const loadUrl = (url) => {
  //   setProduto(null);
  //   setLoader(true);
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((responseJSON) => setProduto(responseJSON))
  //     .finally(() => setLoader(false));
  // };

  const loadUrl = async (url) => {
    setLoader(true);
    const response = await fetch(url);
    const responseJSON = await response.json();
    setProduto(responseJSON);
    setLoader(false);
  };

  return (
    <>
      {Object.keys(urls).map((key) => (
        <button key={key} style={btns} onClick={() => loadUrl(urls[key])}>
          {capitalize(key)}
        </button>
      ))}
      {/* {loader ? <p>Carregando...</p> : null} */}
      {/* {produto ? <Produto produto={produto} /> : null} */}
      {loader && <p>Carregando...</p>}
      {!loader && produto && <Produto produto={produto} />}
    </>
  );
};

export default App;
