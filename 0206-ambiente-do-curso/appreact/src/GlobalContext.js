import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [produtos, setProdutos] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const limparDados = React.useCallback(() => {
    setProdutos(null);
  }, []);

  const carregarDados = React.useCallback(() => {
    setLoading(true);
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((responseJSON) => setProdutos(responseJSON))
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    carregarDados();
  }, [carregarDados]);

  return (
    <GlobalContext.Provider
      value={{ produtos, setProdutos, limparDados, carregarDados, loading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
