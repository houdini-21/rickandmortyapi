import React from 'react';
import logo from '../../public/images/logo.png';
const Header = () => {
  return (
    <section className="header__box">
      <nav className="navbar__box">
        <div className="navbar__item">
          <img className="navbar__item-logo" src={logo} alt="Rick and Morty logo" />
        </div>
      </nav>
    </section>
  );
};

export default Header;
