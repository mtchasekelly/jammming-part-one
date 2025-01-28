import React from 'react';

import '../SearchBar/SearchBar.css';

function SearchBar() {

    return (

        <div className="SearchBar">
            <input placeholder="Enter a Song Title" />
            <button className="SearchButton">Search</button>
        </div>

    )

}

export default SearchBar;