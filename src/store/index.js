import { combineReducers, createStore } from "redux";
import AuthReducer from "./reducers/authReducer";
import PlayerReducer from "./reducers/playerReducer";

const store = createStore(
  combineReducers({
    auth: AuthReducer,
    player: PlayerReducer,
  }),
  (process.env.NODE_ENV === "development" || undefined) &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
