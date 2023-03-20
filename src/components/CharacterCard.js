import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import CardModal from "./CardModal";


function CharacterCard({ character }) {
    const [show, setShow] = useState(false);
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={character.image} alt="Avatar"></img>
        </div>
        <div className="flip-card-back">
          <img className="gris" src={character.image} alt="Avatar" />
          <div className="text">
                    <h1>{character.name}</h1>
                
           <Button onClick={()=>setShow(true)} id="CardBtn">More</Button>

  
          </div>
        </div>
      </div>
        <CardModal onClose={()=> setShow(false)} show={show} character={character} />

    </div>
  
  );
}

export default CharacterCard;
