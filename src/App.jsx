import React from 'react';

const App = () => {
  const [message, setMessage] = React.useState('Hello World');

  const handleClick = () => {
    setMessage('You clicked me!');
  };

  return <div onClick={handleClick}>{message}</div>;
};

export default App;
