import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import {Link} from "react-router-dom";


export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage/>
      <Link to='/'>
        <button className="home-button">Take me home!</button>
      </Link>
    </main>
  );
}
