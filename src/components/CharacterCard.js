import React from "react";

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
                    <input type="button" value="more" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
