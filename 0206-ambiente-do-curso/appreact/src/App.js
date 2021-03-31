import React from 'react';
import { GlobalStorage } from './GlobalContext';
import Produtos from './Produtos';
import TratarDados from './TratarDados';

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

const App = () => {
  return (
    <GlobalStorage>
      <TratarDados />
      <Produtos />
    </GlobalStorage>
  );
};

export default App;
