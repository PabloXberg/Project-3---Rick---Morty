import React, { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import Button from 'react-bootstrap/Button';
function Characters() {
  const [characters, setCharacters] = useState(null);
  const [info, setInfo] = useState(null);
  const [errores, setErrores] = useState(null);

  let [url, setUrl] = useState("https://rickandmortyapi.com/api/character/?page=1");

   async function fetchData(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setCharacters(result.results);
      setInfo(result.info);
      setErrores(null)
      console.log('info :>> ', info);
    } catch (error) {
       setErrores(error.message);
      console.log("error:async", errores);
    }
   }
  
    const nextPage = () => {
      info.next ? setUrl(info.next) : alert("Ultima pagina");
  };
    const prevPage = () => {
      info.prev ? setUrl(info.prev) : alert("primera pagina");
    };

  
  useEffect(() => {
    fetchData(url);
      }, [url]);

  return (
    <div>
      <div className="pagination">
          <input onClick={prevPage} type="button" value="<<" />
          <input onClick={nextPage} type="button" value=">>" /> 
      </div>

       <div className="inputDiv">
        <input id="textInput" placeholder="Rick it...!" type="text" />
      </div>
       
      <div className="CardContainer">
        {characters ? (
         characters.map((character) => {
          return (
            <CharacterCard key={character.id} character={character} />
          )
          
        })
      ) : (
        <h1>{errores}</h1>
      )}
      </div>
      
    
    </div>
  );
}

export default Characters;
