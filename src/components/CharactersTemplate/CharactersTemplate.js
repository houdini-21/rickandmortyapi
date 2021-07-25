import React, { Fragment } from 'react';
import './styles/charactersTemplate.scss'

const CharactersTemplate = ({ character }) => {
  return (
    <Fragment>
      {character.map((item) => (
        <div className="card__box" key={item.id}>
          <img className="card__img" src={item.image} alt="" />
          <div className="card__box-title">
            <p className="card__name-p"></p>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default CharactersTemplate;
