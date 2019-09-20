import React from "react";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <div className="welcome-split"><img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
          <div className="welcome-links">
            <Link to="/characters" >Characters</Link>
            <Link to="/locations" >Locations</Link>
          </div></div>
      </header>
    </section>
  );
}
