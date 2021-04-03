import React from 'react';

const App = () => {
  const [termos, setTermos] = React.useState(false);
  const [cores, setCores] = React.useState(['Vermelho']);

  const handleChange = ({ target }) => {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  };

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="Azul"
          onChange={handleChange}
          checked={cores.includes('Azul')}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="Vermelho"
          onChange={handleChange}
          checked={cores.includes('Vermelho')}
        />
        Vermelho
      </label>
      <label>
        <input
          type="checkbox"
          value="Termos"
          checked={termos}
          onChange={({ target }) => setTermos(target.checked)}
        />
        Aceito os termos.
      </label>
    </form>
  );
};

export default App;
