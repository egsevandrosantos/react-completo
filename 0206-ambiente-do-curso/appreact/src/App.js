import React from 'react';

const App = () => {
  const [produto, setProduto] = React.useState('');

  const handleChange = ({ target }) => {
    setProduto(target.value);
  };

  return (
    <form>
      <label>
        <input
          type="radio"
          name="produto"
          value="smartphone"
          checked={produto === 'smartphone'}
          onChange={handleChange}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          name="produto"
          value="notebook"
          checked={produto === 'notebook'}
          onChange={handleChange}
        />
        Notebook
      </label>
    </form>
  );
};

export default App;
