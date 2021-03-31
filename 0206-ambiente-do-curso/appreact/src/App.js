import React from 'react';

// function operacaoLenta() {
//   let c = 0;

//   for (let i = 0; i < 100000000; i++) {
//     c += i / 10;
//   }

//   return c;
// }

const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log('Teste');
  };

  const func2 = React.useCallback(() => {
    console.log('Teste');
  }, []);

  set1.add(func1); // func1 é criada varias vezes
  set2.add(func2); // func2 é criada uma unica vez (useCallback)
  console.log(set1, set2);

  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

const App = () => {
  // const [contar, setContar] = React.useState(0);
  // const valor = React.useMemo(() => {
  //   const localItem = window.localStorage.getItem('produto');
  //   console.log('Memo');
  //   return localItem;
  // }, []);
  // const valorContar = React.useMemo(() => {
  //   console.log('Memo Contar');
  //   return contar;
  // }, [contar]);
  // const t1 = performance.now();
  // const valorOperacaoLenta = React.useMemo(() => {
  //   console.log('Use memo operacaoLenta'); // Chama apenas uma vez
  //   return operacaoLenta();
  // }, []); // Sem [] chama a todo momento
  // const t2 = performance.now();

  // // Medir performance de operacaoLenta
  // //const t1 = performance.now();
  // // const valorOperacaoLenta = operacaoLenta(); // Aqui chama varias vezes
  // //const t2 = performance.now();
  // console.log(t2 - t1);

  // return (
  //   <>
  //     <button onClick={() => setContar(contar + 1)}>{contar}</button>
  //     <p>{valor}</p>
  //     <p>{valorContar}</p>
  //     <p>{valorOperacaoLenta}</p>
  //   </>
  // );

  const [contar, setContar] = React.useState(0);

  // const handleClick = React.useCallback(() => {
  //   setContar((contar) => contar + 1);
  // }, []);

  return (
    <>
      <Produto />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  );
};

export default App;
