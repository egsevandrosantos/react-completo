import React from 'react';
// import UserContext from './UserContext';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
  // console.log(UserContext);
  // return (
  //   <UserContext.Provider value={{ nome: 'André' }}>
  //     <Produto />
  //   </UserContext.Provider>
  // );
};

export default App;
