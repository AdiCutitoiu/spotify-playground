import { PLAYER_UPDATE_DATA } from "../actions/actionTypes";

export default function PlayerReducer(state = {}, action) {
  switch (action.type) {
    case PLAYER_UPDATE_DATA:
      return state;
  }

  return state;
}
