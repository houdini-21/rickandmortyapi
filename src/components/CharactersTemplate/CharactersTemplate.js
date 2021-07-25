import React from 'react';

const CharactersTemplate = ({ character }) => {
  return (
    <div className="container">
      <div className="card-character">
        {character.map((item) => (
          <div className="card" key={item.id}>
            {item.name}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersTemplate;
