import React, { Fragment } from 'react';

const EpisodesTemplate = ({ episode }) => {
  return (
    <Fragment>
      {episode.map((item) => (
        <div className="card__episode" key={item.id}>
          <h1 className="card__title">{item.name}</h1>
          <p className="card__subtitle">{item.episode}</p>
          <p className="card__subtitle">{item.air_date}</p>
        </div>
      ))}
    </Fragment>
  );
};

export default EpisodesTemplate;
