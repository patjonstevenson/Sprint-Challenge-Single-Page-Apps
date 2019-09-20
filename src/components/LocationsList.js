import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";

export default function LocationsList({ locations }) {
    return (
        <section className="character-list">
            {locations.map(location => <LocationCard key={location.id} {...location} />)}
        </section>
    );
}
