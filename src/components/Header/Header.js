import React from 'react';
import logo from '../../images/logo.png';
import header from '../../images/header.png';
import CharacterInfo from '../CharacterInfo/CharacterInfo';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../../styles/header.scss';

const Header = () => {
  return (
    <section className="header__box">
      <Router>
        <nav className="navbar__box">
          <div className="navbar__item">
            <p className="navbar__item-p">Home</p>
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
              <Link to="/Episodes">Episodes</Link>
            </p>
          </div>
          <div className="navbar__item">
            <p className="navbar__item-p">Locations</p>
          </div>
        </nav>
        <Switch>
          <Route path="/episodes">
            <CharacterInfo />
          </Route>
        </Switch>
      </Router>

      <div className="header__box-body">
        <div className="header__text-box">
          <h1 className="header__text-title">Rick and Morty API</h1>
          <p className="header__text-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae atque
            perspiciatis dolor illum officiis?
          </p>
          <br />
          <br />
          <input
            type="text"
            className="header__input"
            placeholder="&#x1F50E;&#xFE0E;	 Search"
          />
        </div>
        <div className="header__img-box">
          <img className="header__img" src={header} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Header;
