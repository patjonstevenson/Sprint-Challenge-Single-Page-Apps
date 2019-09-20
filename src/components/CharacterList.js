import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList({ characters }) {
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => <CharacterCard key={character.id} character={character} />)}
    </section>
  );
}
