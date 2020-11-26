import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import AuthReducer from "./reducers/authReducer";
import PlayerReducer from "./reducers/playerReducer";
import SongListReducer from "./reducers/songListReducer";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    auth: AuthReducer,
    player: PlayerReducer,
    songList: SongListReducer,
  }),
  compose(
    applyMiddleware(thunk),
    (process.env.NODE_ENV === "development" || undefined) &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
