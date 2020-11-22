import React from "react";
import { connect } from "react-redux";
import { updatePlayerData } from "../store/actions/playerActions";

const PlayerUpdateListener = ({ token, updatePlayerData }) => {
  React.useEffect(() => {
    const fetchPlayer = () => {
      fetch("https://api.spotify.com/v1/me/player", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.status == 200) return response.json();
        })
        .then((data) => {
          if (data) updatePlayerData(data);
        });
    };

    fetchPlayer();
    const intervalId = setInterval(fetchPlayer, 1000);

    return () => clearInterval(intervalId);
  }, [token, updatePlayerData]);

  return null;
};

export default connect(
  ({ auth }) => ({
    token: auth.token,
  }),
  { updatePlayerData }
)(PlayerUpdateListener);
