import React from 'react';
import Produto from './Produto';

const App = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);
  const [ativo, setAtivo] = React.useState(false);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((responseJSON) => setDados(responseJSON));
  }, []);

  // React.useEffect(() => {
  //   console.log('Executou');
  // }); // Executa sempre (no primeiro render e todas as vezes que muda estado)

  // React.useEffect(() => {
  //   console.log('Executou');
  // }, []); // Executa apenas no primeiro render ([] = sem dependencia)

  // React.useEffect(() => {
  //   console.log('Executou effect contar');
  //   document.title = 'Total ' + contar;
  // }, [contar]); // Executa toda vez que o estado de contar mudar (no primeiro render executa pois está mudando o estado (definindo))

  return (
    <div>
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco}</p>
          <p>Total: R$ {(+dados.preco * +contar).toFixed(2)}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
