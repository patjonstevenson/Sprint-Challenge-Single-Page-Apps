import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

export default function LocationsList() {
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
        <section className="character-list">
            {locations.map(location => <LocationCard key={location.id} {...location} />)}
        </section>
    );
}
