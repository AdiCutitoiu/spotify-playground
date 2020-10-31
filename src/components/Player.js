import React from "react";
import PlayerControls from "./PlayerControls";

export function Player() {
  return (
    <div className="player">
      <div className="player-song-details"></div>
      <PlayerControls />
      <div className="player-volume"></div>
    </div>
  );
}
