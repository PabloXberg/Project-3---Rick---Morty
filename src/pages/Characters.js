import React, { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Characters() {
  const [characters, setCharacters] = useState(null);
  const [info, setInfo] = useState(null);
  const [show, setShow] = useState(false);
  const [errores, setErrores] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [specialsearchInput, setSpecialSearchInput] = useState('?name=');
  const [filteredResults, setFilteredResults] = useState([]);
  const [page, setPage] = useState(1);

  let [url, setUrl] = useState(`https://rickandmortyapi.com/api/character/`);
 

  const filteredChads = characters?.filter((character) => {
    return character.name.toLocaleLowerCase().includes(searchInput .toLocaleLowerCase());
  });

   async function fetchData(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setCharacters(result.results);
      setInfo(result.info);
      setErrores(null)
        } catch (error) {
       setErrores(error.message);
      }
   }
  
    const nextPage = () => {
      if (info.next) {
        setUrl(info.next);
        setPage(page + 1)
         } 
      else {
        alert("Ultima pagina");
      }
    };
  
     const prevPage = () => {
      if (info.prev) {
        setUrl(info.prev);
        setPage(page - 1)
         } 
      else {
        alert("Primera pagina");
      }
    };

  const handlesInputChange = (event) => {
      setSpecialSearchInput (searchInput)
      setSearchInput(event.target.value);
  }

  const specialSearch = (event) => {

    console.log('searchInput :>> ', searchInput);

    setSpecialSearchInput(specialsearchInput + searchInput);

    console.log('specialsearchInput :>> ', specialsearchInput);

    setUrl(`https://rickandmortyapi.com/api/character/?name=`+searchInput);

    console.log('url :>> ', url);
  }
  
  useEffect(() => {
    fetchData(url);
    console.log('url :>> ', url);
      }, [url, specialsearchInput]);

  return (
    <div>
     <ButtonGroup id="pagination" className="me-2"  >
        <Button variant="secondary" onClick={prevPage} type="button" >Prev</Button>

        <h1>  {page}  </h1>

        <Button variant="secondary" onClick={nextPage} type="button" >Next</Button>
        <input onChange={handlesInputChange} id="textInput" placeholder="Rick it...!" type="text" />
       <Button variant="primary" onClick={specialSearch} type="button" >Search</Button>
      </ButtonGroup>
            

            
      <div className="CardContainer">
        {characters && filteredChads.map((character) => {
          return (
            <CharacterCard character={character} setShow={setShow} />
          )
        }
        )
}

          
      </div>
      
    
    </div>
  );
}

export default Characters;
