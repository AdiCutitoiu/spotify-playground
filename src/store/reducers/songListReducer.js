import { CallToActionSharp } from "@material-ui/icons";
import { SONG_LIST_SET, SONG_LIST_SET_SEARCH } from "../actions/actionTypes";

const initialState = { songs: [], search: "" };

export function SongListReducer(state = initialStatem, action) {
  switch (action.type) {
    case SONG_LIST_SET:
      return {
        ...state,
        songs: action.songs || [],
      };
    case SONG_LIST_SET_SEARCH: {
      return {
        ...state,
        search: action.search,
      };
    }
  }

  return state;
}
