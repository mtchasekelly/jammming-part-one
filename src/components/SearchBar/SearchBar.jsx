import React, { useState, useCallback } from "react";
import "../SearchBar/SearchBar.css";

function SearchBar(props) {

  const [term, setTerm] = useState("");

  
  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);


  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]);


  return (
    
    <div className="SearchBar">

      <input placeholder="Enter a song, album, or artist..." 
             onChange={handleTermChange} />

      <div>
        <button className="SearchButton" onClick={search}>Search</button>
      </div>

    </div>
  );
};

export default SearchBar;