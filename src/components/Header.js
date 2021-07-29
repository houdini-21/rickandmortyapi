import React from 'react';
import header from '../images/header.png';
import '../styles/header.scss';

const Header = () => {
  return (
    <section className="header__box">
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
