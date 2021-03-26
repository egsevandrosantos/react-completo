import React from 'react';

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const ricardo = {
  cliente: 'Ricardo',
  idade: 28,
  compras: [],
  ativa: true,
};

const listaClientes = [luana, mario, ricardo];

listaClientes.forEach((cliente, index) => {
  cliente['proximo'] = listaClientes[index + 1] || listaClientes[0];
});

const ativa = { color: 'Green' };

const inativa = { color: 'Red' };

const App = () => {
  const [dados, setDados] = React.useState(luana);

  const calcularGastos = (dado) => {
    const valores = dado.compras.map(
      (compra) => +compra.preco.replace('R$ ', '')
    );
    const valorFinal = valores.reduce((prev, curr) => prev + curr, 0);
    dado['valorFinal'] = valorFinal;
    return valorFinal;
  };

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:&nbsp;
        {/* style={{color: dados.ativa ? 'green' : 'red' }} */}
        <span style={dados.ativa ? ativa : inativa}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total gasto: R$ {calcularGastos(dados).toFixed(2)}</p>
      {/* <p>
        {/* {dados['valorFinal'] > 10000 ? 'Você está gastando muito' : undefined} *#/}
        {dados['valorFinal'] > 10000 && 'Você está gastando muito'}
      </p> */}
      {dados['valorFinal'] > 10000 && <p>Você está gastando muito</p>}
      <button onClick={() => setDados(dados['proximo'])}>Trocar cliente</button>
    </>
  );
};

export default App;
