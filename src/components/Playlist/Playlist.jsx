import React, { useCallback } from "react";
import "../Playlist/Playlist.css";
import TrackList from "../TrackList/TrackList";


function Playlist(props) {
  
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );

  return (
    
      <div className="Playlist">

        <input onChange={handleNameChange} placeholder="Create Playlist..." />

        <TrackList
          tracks={props.playlistTracks}
          isRemoval={true}
          onRemove={props.onRemove}
        />

        <button className="SaveButton" onClick={props.onSave}>Save</button>

      </div>
    
  );
};

export default Playlist;
