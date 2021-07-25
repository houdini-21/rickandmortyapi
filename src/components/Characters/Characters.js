import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharactersTemplate from '../CharactersTemplate/CharactersTemplate';

function Characters() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limitPage, setLimitPage] = useState(1);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (pag) => {
    let url = `https://rickandmortyapi.com/api/character/?page=${pag}`;
    setLoading(true);
    const res = await axios.get(url);
    setCharacter(res.data.results);
    setLimitPage(res.data.info.pages);
    setLoading(false);
  };

  const next = () => {
    if (page <= limitPage) {
      setPage(page + 1);
      fetchData(page);
    }
  };

  const prev = () => {
    if (page > 1) {
      setPage(page - 1);
      fetchData(page);
    }
  };

  return (
    <div>
      {loading ? (
        <p>loading</p>
      ) : (
        <>
          <CharactersTemplate character={character} />
        </>
      )}
      <button onClick={prev}>prev</button>
      <button onClick={next}>nest</button>
    </div>
  );
}

export default Characters;
