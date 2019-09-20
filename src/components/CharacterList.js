import React, { useEffect, useState } from "react";
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
    <div className="characters">
      <SearchForm list={characters} setList={setFilteredList} />
      <section className="character-list">
        {filteredList.map(character => <CharacterCard key={character.id} character={character} />)}
      </section>
    </div>
  );
}
