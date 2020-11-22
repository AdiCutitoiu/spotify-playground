import { SONG_LIST_SET_SEARCH, SONG_LIST_SET } from "./actionTypes";

export function setSongList(songs) {
  return {
    type: SONG_LIST_SET,
    songs: songs,
  };
}

export function setSongListSearch(search) {
  return {
    type: SONG_LIST_SET_SEARCH,
    search: search,
  };
}
