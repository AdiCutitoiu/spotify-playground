import React from "react";
import { SearchAppBar } from "../components/AppBar";
import { Player } from "../components/Player";
import PlayerUpdateListener from "../components/PlayerUpdateListener";
import { SongList } from "../components/SongList";

export function Dashboard({ token }) {
  return (
    <div className="dashboard">
      <SearchAppBar />
      <SongList />
      <Player />
      <PlayerUpdateListener />
    </div>
  );
}
