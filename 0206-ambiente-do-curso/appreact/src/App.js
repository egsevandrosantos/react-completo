import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './form/Form';

const Teste = () => {
  const active = false;
  return active ? <p>Teste</p> : null;
};

const App = () => {
  return (
    <Fragment>
      {/* React.Fragment desestruturado no import */}
      <Teste />
      <Header />
      <p>App</p>
      <Form />
      <Footer />
    </Fragment>
  );
};

export default App;
