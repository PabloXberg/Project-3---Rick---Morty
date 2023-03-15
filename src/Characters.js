import React, { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

function Characters() {
  const [characters, setCharacters] = useState(null);
  const [error, setError] = useState(null);

  let url = "https://rickandmortyapi.com/api/character";

  const fetchData = () => {
    fetch(url)
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((result) => {
        console.log("result", result.results);
        setCharacters(result.results);
        setError(null);

        console.log("characters", characters);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error.message);
      });
  };

  useEffect(() => {
    console.log("useEffec run");
    fetchData();
    console.log("characters", characters);
  }, []);

  return (
    <div>
      <h1>Rick and Morty app</h1>
      {/* {characters &&
        characters.map((character) => {
          return <p key={character.id}>{character.name}</p>;
        })} */}
      {characters ? (
        characters.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })
      ) : (
        <h1>{error}</h1>
      )}
    </div>
  );
}

export default Characters;
