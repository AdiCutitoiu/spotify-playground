import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { TOKEN } from "./util/api";
import { Dashboard } from "./screens/Dashboard";
import { connect } from "react-redux";
import { initialize } from "./store/actions/authActions";

const SPOTIFY_PERMISSION = [
  "user-read-playback-position",
  "user-read-recently-played",
  "user-top-read",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-playback-state",
].join("%20");

function App({ token, initialize }) {
  React.useEffect(() => {
    initialize();
  }, []);

  if (token) {
    return <Dashboard token={TOKEN} />;
  }

  return (
    <div className="main-window">
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          const authURL = `https://accounts.spotify.com/authorize?client_id=ca93a9a36737414992ab0d839625d5ac&redirect_uri=http:%2F%2Flocalhost:3000&scope=${SPOTIFY_PERMISSION}&response_type=token`;
          window.location.replace(authURL);
        }}
      >
        Login
      </Button>
    </div>
  );
}

export default connect(
  (state) => ({
    token: state.auth.token,
  }),
  { initialize }
)(App);
