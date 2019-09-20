import React from "react";

export default function LocationCard(location, { name, type, dimension, residents }) {
  return <div className="card">
    <h3>{location.name}</h3>
    <p>Type: {location.type}</p>
  </div>
}
