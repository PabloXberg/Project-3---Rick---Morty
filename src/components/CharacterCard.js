import React from "react";
import Button from 'react-bootstrap/Button';

const goModal = () => {

};

function CharacterCard({ character }) {
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
                    <h5>Gender: {character.gender}</h5>
                    <h5>Species: {character.species}</h5>
            <h5>Status: {character.status}</h5>
           <Button variant="success">more</Button>

  
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
