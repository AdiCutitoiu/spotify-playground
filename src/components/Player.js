import React from "react";
import { PlayerControls } from "./PlayerControls";
import { usePlayer } from "../hooks/usePlayer";

export function Player() {
  const state = usePlayer();

  return (
    <div className="player">
      <div className="player-song-details"></div>
      <PlayerControls />

      <div className="player-volume"></div>
    </div>
  );
}
