import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

// function App() {
//   return React.createElement(
//     'a',
//     { href: 'https://www.origamid.com' },
//     'Origamid'
//   ); // Webpack
// }

ReactDOM.render(<App />, document.getElementById('root')); // Babel
// ReactDOM.render(App(), document.getElementById('root')); // Webpack
