import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LocationCard from "./LocationCard";
import SearchForm from "./SearchForm";
import axios from "axios";

export default function LocationsList() {
    const [locations, setLocations] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/location/")
            .then(res => {
                console.log(res);
                setLocations(res.data.results);
                setFilteredList(res.data.results);
            })
            .catch(err => console.log("Location Request Error: ", err))
    }, []);

    return (
        <div className="list-page">
            <Link to="/">Home</Link>
            <SearchForm list={locations} setList={setFilteredList} />
            <section className="list">
                {filteredList.map(location => <LocationCard key={location.id} {...location} />)}
            </section>
        </div>
    );
}
