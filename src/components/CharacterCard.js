import React from "react";
import styled from "styled-components";

const my=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export default function CharacterCard(props) {

const{name, status, species} = props.character;

  return( 
  // <span>todo: character</span>
    <my>
      <div className="character-name">
        Name: {name}
      </div>
      <div className="character-status">
        Status: {status}
      </div>
      <div className="character-species">
        Species: {species}
      </div>
    </my>
  );
};
