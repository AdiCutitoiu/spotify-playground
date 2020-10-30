import React from "react";
import { Player } from "../components/Player";
import { SongList } from "../components/SongList";

export function Dashboard({ token }) {
  return (
    <div className="dashboard">
      <SongList />
      <Player />
    </div>
  );
}
