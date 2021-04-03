import React from 'react';
import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading, error } = useFetch();

  const downcase = (text) =>
    text ? `${text[0].toLowerCase()}${text.slice(1)}` : '';

  const handleClick = ({ target }) => setProduto(downcase(target.innerText));

  React.useEffect(() => {
    (async () => {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/'
      );
      console.log(response, json);
    })();
    // const fetchData = async () => {
    //   const { response, json } = await request(
    //     'https://ranekapi.origamid.dev/json/api/produto/'
    //   );
    //   console.log(response, json);
    // };
    // fetchData();
    // request('https://ranekapi.origamid.dev/json/api/produto/').then(
    //   ({ response, json }) => {
    //     console.log(response, json);
    //   }
    // );
  }, [request]);

  return (
    <>
      <p>{produto}</p>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      {loading && <p>Carregando...</p>}
      {!loading &&
        data &&
        data.map((item) => (
          <React.Fragment key={item.id}>
            <h1>{item.nome}</h1>
          </React.Fragment>
        ))}
      {!loading && error && <p>{error}</p>}
    </>
  );
};

export default App;
