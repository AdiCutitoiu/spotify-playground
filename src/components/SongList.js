import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import SongCard from "./SongCard";
import Search from "./Search";
import { searchAsync } from "../store/thunks/songListThunks";
import { connect } from "react-redux";

function SongList({ songs, dispatch }) {
  console.log(songs);
  return (
    <Grid container spacing={2} style={{ maxHeight: "100%", overflow: "auto" }}>
      <Grid item xs={12}>
        <Search onSearch={(search) => dispatch(searchAsync(search))} />
      </Grid>
      {songs.map((song) => (
        <Grid key={song.uri} item md={3}>
          <SongCard
            name={song.name}
            uri={song.uri}
            artist={song.artists[0]?.name || ""}
            imageUri={song.album.images[1].url}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default connect((state) => ({ songs: state.songList.songs }))(SongList);
