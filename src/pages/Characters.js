import React, { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

function Characters() {
  const [characters, setCharacters] = useState(null);
  const [error, setError] = useState(null);

  let url = "https://rickandmortyapi.com/api/character/?page=1";


  const fetchData  = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setCharacters(result.results);
        setError(null);

      })
      .catch((error) => {
       
        setError(error.message);
      });
  };

  useEffect(() => {
    fetchData();
   }, []);

  return (
    <div>
      <div className="CardContainer">
        {characters ? (
        characters.map((character) => {
          return (
            <CharacterCard key={character.id} character={character} />
          )
          
        })
      ) : (
        <h1>{error}</h1>
      )}
      </div>
      
    </div>
  );
}

export default Characters;
