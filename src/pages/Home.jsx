import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Feed from "../components/Feed";
import LoadingScreen from "../components/LoadingScreen";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offSet, setOffSet] = useState(() => {
    const storedOffset = sessionStorage.getItem("offset");
    return storedOffset ? parseInt(storedOffset, 10) : 0;
  });
  const [loading, setLoading] = useState(true);

  function handleNextPage() {
    const newOffset = offSet + 50;
    setOffSet(newOffset);
    sessionStorage.setItem("offset", newOffset.toString());
  }

  function handlePreviousPage() {
    const newOffset = offSet <= 50 ? 0 : offSet - 50;
    setOffSet(newOffset);
    sessionStorage.setItem("offset", newOffset.toString());
  }

  useEffect(() => {
    async function fetchPokemon() {
      const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offSet}`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      setPokemons(data.results);
      setTimeout(() => setLoading(false), 500);
    }

    fetchPokemon();
  }, [offSet]);

  useEffect(() => {
    setLoading(true);
  }, [offSet]);

  return (
    <div className="Home maxWidth">
      {loading && <LoadingScreen />}
      {!loading && (
        <>
          <Header />
          <Feed pokemons={pokemons} />
          <div className="pagination">
            <button onClick={handlePreviousPage} className="btn">
              Previous
            </button>
            <button onClick={handleNextPage} className="btn">
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
