import React from 'react';

const Produto = () => {
  React.useEffect(() => {
    const handleScroll = (ev) => {
      console.log(ev);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }; // onDestroy
  }, []);

  return (
    <div style={{ height: '200vh' }}>
      <p>Meu produto</p>
    </div>
  );
};

export default Produto;
