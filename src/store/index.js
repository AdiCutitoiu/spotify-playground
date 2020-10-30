import { combineReducers, createStore } from "redux";
import AuthReducer from "./reducers/authReducer";
import PlayerReducer from "./reducers/playerReducer";

const store = createStore(
  combineReducers({
    auth: AuthReducer,
    player: PlayerReducer,
  })
);

export default store;
