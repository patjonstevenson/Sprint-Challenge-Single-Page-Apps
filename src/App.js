import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";

export default function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => console.log("Character Request Error: ", err))
  }, []);
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        console.log(res);
        setLocations(res.data.results);
      })
      .catch(err => console.log("Location Request Error: ", err))
  }, []);
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" render={props => <CharacterList characters={characters} {...props} />} />
      <Route exact path="/locations" render={props => <LocationsList locations={locations} {...props} />} />
    </main>
  );
}
