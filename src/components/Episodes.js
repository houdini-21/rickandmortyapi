import React, { useEffect, useState } from 'react';
import Parallax from './Parallax';
import EpisodesTemplate from './EpisodesTemplate';
import '../styles/character.scss';

function Episodes() {
  const [episode, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limitPage, setLimitPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    let url = `https://rickandmortyapi.com/api/episode?page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setEpisodes((episode) => episode.concat(response.results));
        setLimitPage(response.info.pages);
        setLoading(false);
      });
  }, [page]);

  const loadMore = () => {
    if (page <= limitPage) {
      setPage(page + 1);
    }
  };

  return (
    <div className="padding-top-95">
      <Parallax title="I'm not arguing I'm explaining why I'm right" />
      <div className="character">
        <h2 className="character__title">Episodes</h2>
        <div className="character__box">
          <EpisodesTemplate episode={episode} />
        </div>

        <div className="character__btns-box">
          <div className="character__btn-item" onClick={loadMore}>
            <p className="character__btn-item-p">
              {loading ? 'loading...' : 'Load More'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Episodes;
