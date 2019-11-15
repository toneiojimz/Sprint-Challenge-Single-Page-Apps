import React from "react";

export default function CharacterCard(props) {

const{name, status, species} = props.character;

  return( 
  // <span>todo: character</span>
    <div className="character-card">
      <div className="character-name">
        Name: {name}
      </div>
      <div className="character-status">
        Status: {status}
      </div>
      <div className="character-species">
        Species: {species}
      </div>
    </div>
  );
};
