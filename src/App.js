import React from 'react';
import Characters from './components/Characters/Characters';
import Header from './components/Header/Header';
import Parallax from './components/Parallax/Parallax';
import './app.scss';

function App() {
  return (
    <div>
      <Header />
      <Parallax />
      <Characters />
    </div>
  );
}

export default App;
