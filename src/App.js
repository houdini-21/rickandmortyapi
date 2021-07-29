import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CharacterInfo from './components/CharacterInfo';
import Episodes from './components/Episodes';
import logo from './images/logo.png';
import './app.scss';

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar__box">
          <div className="navbar__item">
            <p className="navbar__item-p">
              <Link to="/">Home</Link>
            </p>
          </div>
          <div className="navbar__item">
            <p className="navbar__item-p">Characters</p>
          </div>
          <div className="navbar__item">
            <img
              className="navbar__item-logo"
              src={logo}
              alt="Rick and Morty logo"
            />
          </div>

          <div className="navbar__item">
            <p className="navbar__item-p">
              <Link to="/episodes">Episodes</Link>
            </p>
          </div>
          <div className="navbar__item">
            <p className="navbar__item-p">Locations</p>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/episodes" component={Episodes} />
          <Route path="/character/:id" exact component={CharacterInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
