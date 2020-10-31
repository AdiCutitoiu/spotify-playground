import { PLAYER_UPDATE_DATA } from "../actions/actionTypes";

export default function PlayerReducer(state = {}, action) {
  console.log(action.type);
  switch (action.type) {
    case PLAYER_UPDATE_DATA:
      return action.playerData;
  }

  return state;
}
