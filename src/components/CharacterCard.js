import React from "react";

export default function CharacterCard({ character }) {
  return <div className="character-card">
    <h3>{character.name}</h3>
    <p>Status: {character.status}</p>
  </div>
}
