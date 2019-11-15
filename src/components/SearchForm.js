import React, { useEffect, useState } from "react";
import axios from "axios";


export default function SearchForm() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

    useEffect (()=>{
      axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response =>{
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLocaleLowerCase())
          );
          setData(characters);
      });
      
    }, [query]);

      const handleInputChange = event =>{
        setQuery(event.target.value);
      };
 
  return (
    <div className= "characters">
      <form className="search">
        <input
          type= "text"
          onChange={handleInputChange}
          value ={query}
          
          tabIndex="0"
          className= "prompt search-name"
          placeholder= "search by name"
          autoComplete= "off"
          />
      </form>
      <div className="char">
        {data.map(data => {
          return (
            <div className ="character-list" key={DataTransfer._id}>
              <h3 className = "capital">Name: {data.name} </h3>
              <h3 className = "capital">Status: {data.status} </h3>
              <h3 className = "capital">Species: {data.species}</h3>
            </div>
          );
        })}
      </div>
    </div>
   
  );
}
