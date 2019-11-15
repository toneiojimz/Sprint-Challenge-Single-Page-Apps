import React from "react";
import {Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import {Link} from "react-router-dom";
import SearchForm from "./components/SearchForm.js";
import "./index.css";
import CharacterList from "./components/CharacterList.js";



export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage/>
      <Link to='/'>
        <button className="home-button">Take me home!</button>
      </Link>
      <Route exact path ='/'/>
      <SearchForm/>
      
     
      
    </main>
  );
}
