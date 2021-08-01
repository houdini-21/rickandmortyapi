import React from 'react';
import '../styles/parallax.scss';

const Parallax = ({ title }) => {
  return (
    <section className="parallax__box">
      <h2 className="parallax__title">{title}</h2>
    </section>
  );
};

export default Parallax;
