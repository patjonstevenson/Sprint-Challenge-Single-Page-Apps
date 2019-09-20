import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardDeck } from "reactstrap";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacters(res.data.results);
        setFilteredList(res.data.results);
      })
      .catch(err => console.log("Character Request Error: ", err))
  }, []);

  return (
    <div>
      <Link to="/">Home</Link>
      <SearchForm list={characters} setList={setFilteredList} />
      <CardDeck >
        {filteredList.map(character => <CharacterCard key={character.id} character={character} />)}
      </CardDeck>
    </div>
  );
}
