import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/charactersTemplate.scss';

const CharactersTemplate = ({ character }) => {
  return (
    <Fragment>
      {character.map((item) => (
        <div className="card__box" key={item.id}>
          <img className="card__img" src={item.image} alt="" />
          <Link to={`/character/${item.id}`}>
            <div className="card__box-title">
              <p className="card__name-p">{item.name}</p>
            </div>
          </Link>
        </div>
      ))}
    </Fragment>
  );
};

export default CharactersTemplate;
