import React from 'react';
import './App.css';

const App = () => {
  return <a href="https://www.origamid.com">Origamid</a>; // Babel (JSX)
  // return React.createElement('a', { href: 'https://www.origamid.com' }, 'Origamid'); // Webpack
};

export default App;
