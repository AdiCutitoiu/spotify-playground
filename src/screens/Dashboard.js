import React from "react";
import { Player } from "../components/Player";
import PlayerUpdateListener from "../components/PlayerUpdateListener";
import { SongList } from "../components/SongList";

export function Dashboard({ token }) {
  return (
    <div className="dashboard">
      <SongList />
      <Player />
      <PlayerUpdateListener />
    </div>
  );
}
