import React from 'react';

const Pergunta = ({ pergunta, setRespostas, error, setError }) => {
  const [resposta, setResposta] = React.useState('');

  const handleChange = ({ target }) => {
    setError(null);
    setResposta(target.value);
    setRespostas((respostas) => ({
      ...respostas,
      [pergunta.id]: target.value,
    }));
  };

  return (
    <>
      <h1>{pergunta.pergunta}</h1>
      {pergunta.options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={resposta === option}
            onChange={handleChange}
            name={pergunta.id}
          />
          {option}
        </label>
      ))}
      {error && <p>{error}</p>}
    </>
  );
};

export default Pergunta;
