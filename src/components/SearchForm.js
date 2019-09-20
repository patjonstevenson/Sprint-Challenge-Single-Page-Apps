import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";



export default function SearchForm({ list, setList }) {
  const [searchList, setSearchList] = useState([]);

  console.log("List: ", list);
  const handleChanges = e => {
    setSearchList(list.filter(elem => elem.name.includes(e.target.value)));
    console.log("Search List: ", searchList);
  }
  useEffect(() => {
    setList(searchList);

  }, [searchList]);
  return (
    <section className="search-form">
      <form>
        <label>
          Search Term:<br />
          <input type="text" id="searchTerm" name="searchTerm" placeholder="Search term" onChange={handleChanges} />
        </label>

      </form>
    </section>
  );
}
