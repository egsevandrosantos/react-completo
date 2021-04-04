import React from 'react';
import Pergunta from './Pergunta';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [pIndex, setPIndex] = React.useState(0);
  const [respostas, setRespostas] = React.useState(
    perguntas.reduce((acc, field) => ({ ...acc, [field.id]: '' }), {})
  );
  const [error, setError] = React.useState(null);

  const handleClick = () => {
    let error;

    const pergunta = perguntas[pIndex];
    const resposta = respostas[pergunta.id];

    if (!resposta || !resposta.toString().trim()) {
      error = 'Selecione uma resposta';
    }

    setError(error);
    !error && setPIndex(pIndex + 1);
  };

  const calcularAcertos = () =>
    perguntas.reduce(
      (acc, { resposta, id }) => acc + (resposta === respostas[id] ? 1 : 0),
      0
    );

  return (
    <>
      {perguntas[pIndex] && (
        <>
          <Pergunta
            pergunta={perguntas[pIndex]}
            error={error}
            setError={setError}
            setRespostas={setRespostas}
          />
          <button onClick={handleClick}>Próxima</button>
        </>
      )}
      {!perguntas[pIndex] && (
        <>
          <p>
            {calcularAcertos()} acerto(s) de {perguntas.length} pergunta(s)
          </p>
          {perguntas.map((pergunta) => (
            <React.Fragment key={pergunta.id}>
              <h3>Pergunta: {pergunta.pergunta}</h3>
              <p>Sua resposta: {respostas[pergunta.id]}</p>
              <p>Resposta correta: {pergunta.resposta}</p>
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
};

export default App;
