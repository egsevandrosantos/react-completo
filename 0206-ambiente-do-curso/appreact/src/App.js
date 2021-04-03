import React from 'react';
import Input from './Form/Input';
import Radio from './Form/Radio';
import Select from './Form/Select';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('Smartphone');
  const [cor, setCor] = React.useState('Vermelho');
  const [fruta, setFruta] = React.useState('');

  return (
    <form>
      <h3>Frutas</h3>
      <Radio
        name="fruits"
        options={['Banana', 'Maçã', 'Pêra']}
        value={fruta}
        setValue={setFruta}
      />
      <h3>Cores</h3>
      <Radio
        name="color"
        options={['Azul', 'Vermelho']}
        value={cor}
        setValue={setCor}
      />
      <h3>Produtos</h3>
      <Select
        options={['Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
      <h3>Inputs</h3>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
