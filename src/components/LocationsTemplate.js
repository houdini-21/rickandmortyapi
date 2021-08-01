import React, { Fragment } from 'react';

const LocationsTemplate = ({ locations }) => {
  return (
    <Fragment>
      {locations.map((item) => (
        <div className="card__episode" key={item.id}>
          <h1 className="card__title">{item.name}</h1>
          <p className="card__subtitle">{item.type}</p>
          <p className="card__subtitle">{item.dimension}</p>
        </div>
      ))}
    </Fragment>
  );
};

export default LocationsTemplate;
