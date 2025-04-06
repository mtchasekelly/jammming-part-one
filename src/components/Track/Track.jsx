import React, { useCallback } from "react";
import "../Track/Track.css";

function Track(props) {
  
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );


  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );


  function renderAction() {

    if (props.isRemoval) {

      return (
        <button className="TrackAction" onClick={removeTrack}>-</button>
      );

    } else {
    
    return (

      <button className="TrackAction" onClick={addTrack}>+</button>
    
      );
    }
  }

  
  if (!props.track) {
    return <div className="Track">No Track Aavailable.</div>;
  }

  return (

    <div className="Track">

      <div className="TrackInfo">

        <h3>{props.track.name}</h3>
        <p>{props.track.artist} | {props.track.album}</p>

      </div>

      {renderAction()}

    </div>

  );
};

export default Track;
