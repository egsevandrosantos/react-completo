import React from 'react';
import { GlobalContext } from './GlobalContext';

const TratarDados = () => {
  const globalContext = React.useContext(GlobalContext);

  return (
    <>
      {globalContext.produtos && (
        <button onClick={globalContext.limparDados}>Limpar</button>
      )}
      {!globalContext.loading && !globalContext.produtos && (
        <button onClick={globalContext.carregarDados}>Recarregar</button>
      )}
    </>
  );
};

export default TratarDados;
