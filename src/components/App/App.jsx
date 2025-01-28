import React, { useState } from 'react';

import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {

  return (

    <div>

      <h1>Ja<span>mmm</span>ing<span>.</span></h1>
      <SearchBar />
      <SearchResults />
      <Playlist />

    </div>

  )

}

export default App;
