import React from "react";
import "../SearchResults/SearchResults.css";
import TrackList from "../TrackList/TrackList";

function SearchResults(props) {

  return (

    <div className="SearchResults">

      <h2>Results</h2>
      <TrackList tracks={props.searchResults} onAdd={props.onAdd} />

    </div>
    
  );
};

export default SearchResults;
