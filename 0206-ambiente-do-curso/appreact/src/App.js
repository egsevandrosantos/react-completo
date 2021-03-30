import React from 'react';

const App = () => {
  // const video = React.useRef();
  // const inputEl = React.useRef();
  // const [comentarios, setComentarios] = React.useState([]);
  // const [input, setInput] = React.useState('');

  // React.useEffect(() => {
  //   // console.log(video);
  //   // console.log(video.current.currentTime);
  // }, []);
  // console.log(video); // Aqui não está definido pois o DOM ainda não foi criado

  // const handleClick = () => {
  //   setComentarios([...comentarios, input]);
  //   setInput('');
  //   inputEl.current.focus();
  // };

  // return (
  //   <div>
  //     <ul>
  //       {comentarios.map((comentario) => (
  //         <li key={comentario}>{comentario}</li>
  //       ))}
  //     </ul>
  //     <input
  //       ref={inputEl}
  //       type="text"
  //       value={input}
  //       onChange={({ target }) => setInput(target.value)}
  //     />
  //     <br />
  //     <button onClick={handleClick}>Enviar</button>
  //   </div>
  // );
  // return <video ref={video} />;
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho');
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 3000);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
};

export default App;
