import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {

  const [character, setCharacter] = useState([]);

  // TODO: Add useState to track data from useEffect
  useEffect (()=>{
    const getCharacters =()=> {
    axios 
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response);
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.log('server error', error);
      });
    }
    getCharacters();
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <div className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {character.map(character => (
        <CharacterDetails key= {character.id} character={character}/>
      ))}
    </div>
  );
}

function CharacterDetails ({character}){
  
  return (
    <Link to={`/characters/${character.id}`}>
      <CharacterCard key={character.id} character={character}/>
    </Link>
  );
}

