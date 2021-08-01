import React, { useEffect, useState } from 'react';
import '../styles/characterInfo.scss';

function CharacterInfo(props) {
  const { match } = props;
  const [characterInfo, setCharacterInfo] = useState([]);
  //  const [loading, setLoading] = useState(false);
  const [local, setLocal] = useState('');
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    //   setLoading(true);
    let url = `https://rickandmortyapi.com/api/character/${match.params.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setCharacterInfo(response);
        setLocal(response.location.name);
        setOrigin(response.origin.name);
        ///     setLoading(false);
      });
  }, [match.params.id]);

  return (
    <div className="characterInfo">
      <div className="characterInfo__box">
        <div className="characterInfo__text-box">
          <h2 className="characterInfo__title">{characterInfo.name}</h2>
          <p className="characterInfo__p">
            Specie:
            <span className="characterInfo__p-light">
              {characterInfo.species}
            </span>
          </p>
          <p className="characterInfo__p">
            Status:
            <span className="characterInfo__p-light">
              {characterInfo.status}
            </span>
          </p>
          <p className="characterInfo__p">
            Gender:
            <span className="characterInfo__p-light">
              {characterInfo.gender}
            </span>
          </p>

          <p className="characterInfo__p">
            Location:
            <span className="characterInfo__p-light">{local}</span>
          </p>
          <p className="characterInfo__p">
            Created:
            <span className="characterInfo__p-light">
              {characterInfo.created}
            </span>
          </p>

          <p className="characterInfo__p">
            Origin:
            <span className="characterInfo__p-light">{origin}</span>
          </p>
        </div>
        <div className="characterInfo__img-box">
          <img
            className="characterInfo__img"
            src={characterInfo.image}
            alt={characterInfo.name}
          />
        </div>
      </div>
    </div>
  );
}

export default CharacterInfo;
