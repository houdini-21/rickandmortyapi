import React, { useEffect, useState } from 'react';
import LocationsTemplate from './LocationsTemplate';
import '../styles/character.scss';

function Locations() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limitPage, setLimitPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    let url = `https://rickandmortyapi.com/api/location?page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setLocations((locations) => locations.concat(response.results));
        setLimitPage(response.info.pages);
        setLoading(false);
      });
  }, [page]);

  const loadMore = () => {
    if (page < limitPage) {
      setPage(page + 1);
    }
  };

  return (
    <div className="character">
      <h2 className="character__title">Locations</h2>
      <div className="character__box">
        <LocationsTemplate locations={locations} />
      </div>

      <div className="character__btns-box">
        <div className="character__btn-item" onClick={loadMore}>
          <p className="character__btn-item-p">
            {loading ? 'loading...' : 'Load More'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Locations;
