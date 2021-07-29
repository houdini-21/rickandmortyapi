import React, { Component } from 'react';
import Header from './Header';
import Parallax from './Parallax';
import Characters from './Characters';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Parallax />
        <Characters />
      </div>
    );
  }
}

export default Home;
